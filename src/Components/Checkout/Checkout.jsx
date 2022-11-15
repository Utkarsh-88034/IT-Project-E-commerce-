import React from "react";
import "./Checkout.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useState, useEffect } from "react";
import { store } from "../lib/Commerce";
import Confirmation from "./Confirmation";

function Checkout({ cart, order, onCaptureCheckout, error }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [A1, setA1] = useState("");
  const [A2, setA2] = useState("");
  const [A3, setA3] = useState("");
  const [A4, setA4] = useState("");
  const [step, setStep] = useState(1);
  const [token, setToken] = useState(null);
  const shippingData = {
    custfname: fname,
    custlname: lname,
    custemail: email,
    custphone: phone,
    custaddress1: A1,
    custaddress2: A2,
    custaddress3: A3,
    custaddress4: A4,
  };
  useEffect(() => {
    async function getToken() {
      try {
        const res = await store.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(res);
        setToken(res);
      } catch (error) {
        console.log("error");
      }
    }

    getToken();
  }, [cart]);
  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <div className="checkout-form">
        {step === 1 ? (
          <div className="step-marker">
            <CheckCircleIcon className="check-circle-1" />
            <hr />
            <FiberManualRecordIcon
              className="check-circle-2"
              style={{ color: "grey" }}
            />
          </div>
        ) : (
          <div className="step-marker">
            <CheckCircleIcon className="check-circle-1" />
            <hr />
            <CheckCircleIcon className="check-circle-1" />
          </div>
        )}

        <div className="form-head">
          {step === 1 ? (
            <h2>Billing Address</h2>
          ) : step === 2 ? (
            <h2>Order Summary</h2>
          ) : (
            <h2>Order Complete</h2>
          )}
        </div>
        <div className="form-content">
          {step === 1 ? (
            <AddressForm
              fname={fname}
              lname={lname}
              setFname={setFname}
              setLname={setLname}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              A1={A1}
              setA1={setA1}
              A2={A2}
              setA2={setA2}
              A3={A3}
              setA3={setA3}
              A4={A4}
              setA4={setA4}
              step={step}
              setStep={setStep}
            />
          ) : step === 2 ? (
            <PaymentForm
              step={step}
              setStep={setStep}
              token={token}
              shippingData={shippingData}
              onCaptureCheckout={onCaptureCheckout}
            />
          ) : (
            <Confirmation order={order} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
