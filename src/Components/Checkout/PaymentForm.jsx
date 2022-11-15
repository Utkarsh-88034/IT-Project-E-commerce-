import React from "react";
import "./PaymentForm.css";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderDetails from "./OrderDetails";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({
  step,
  setStep,
  token,
  shippingData,
  onCaptureCheckout,
}) {
  async function submitHandle(e, elements, stripe) {
    e.preventDefault();
    console.log("submit");
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: token.live.line_items,
        customer: {
          firstname: shippingData.custfname,
          lastname: shippingData.custlname,
          email: shippingData.custemail,
        },
        shipping: {
          name: "Primary",
          street: shippingData.custaddress1,
          town_city: shippingData.custaddress2,
          county_state: "DL",
          postal_zip_code: shippingData.custaddress4,
          country: "IN",
        },
        fulfillment: { shipping_method: null },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(token.id, orderData);
      setStep(3);
    }
  }
  return (
    <div className="form-container">
      <OrderDetails token={token} />
      <h1
        style={{
          fontFamily: "PT Sans",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          color: "rgb(75, 75, 75)",
        }}
      >
        Payment Method
      </h1>
      <br />
      <br />
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              className="card-details-form"
              onSubmit={(e) => submitHandle(e, elements, stripe)}
            >
              <CardElement />
              <br />
              <br />
              <div className="checkout-btn">
                <button type="submit" className="pay-btn">
                  Pay {token.live.subtotal.formatted_with_symbol}
                </button>
                <button
                  onClick={() => {
                    if (step !== 1) {
                      setStep(step - 1);
                    }
                  }}
                >
                  Back
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
}

export default PaymentForm;
