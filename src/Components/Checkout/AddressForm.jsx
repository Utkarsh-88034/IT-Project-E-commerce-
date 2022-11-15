import React from "react";
import "./AddressForm.css";
import { useHistory } from "react-router-dom";

function AddressForm({
  fname,
  lname,
  email,
  phone,
  A1,
  A2,
  A3,
  A4,
  setFname,
  setLname,
  setEmail,
  setPhone,
  setA1,
  setA2,
  setA3,
  setA4,
  step,
  setStep,
}) {
  const history = useHistory();
  function submitHandle(e) {
    e.preventDefault();
    if (step === 1) {
      setStep(step + 1);
    }
  }
  return (
    <div classname="from-container">
      <form className="address-form" onSubmit={(e) => submitHandle(e)}>
        <div>
          <label>First Name </label>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            required
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name </label>
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            required
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email </label>
          <input
            type="text"
            placeholder="Email Id"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Address line 1 </label>
          <input
            type="text"
            placeholder="House Number/street"
            value={A1}
            required
            onChange={(e) => {
              setA1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Address line 2 </label>
          <input
            type="text"
            placeholder="Area/Town"
            value={A2}
            required
            onChange={(e) => {
              setA2(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Address line 3 </label>
          <input
            type="text"
            placeholder="City/State"
            value={A3}
            required
            onChange={(e) => {
              setA3(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Address line 4 </label>
          <input
            type="text"
            placeholder="Zip Code"
            value={A4}
            required
            onChange={(e) => {
              setA4(e.target.value);
            }}
          />
        </div>

        <div className="checkout-btn">
          <button type="submit">Next</button>

          <button
            onClick={() => {
              history.push("/cart");
            }}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
