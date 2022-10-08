import React, { useState } from "react";
import Paypal from "./Paypal.js";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const Checkout = () => {
  const [value, setValue] = useState("paypal");

  const handleChange = (event) => {
    console.log(event);
    setValue(event.target.value);
  };

  return (
    <div className="container mt-4 mb-4">
      <div>
        <h2>Checkout</h2>
      </div>
      <div class="row">
        <div className="col-12 col-md-6 col-lg-8">
          <div className="card card-body border-0 shadow mb-3">
            <h5>Select Payment Option</h5>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="PayPal"
              />
              <FormControlLabel
                value="directBankTransfer"
                control={<Radio />}
                label="Direct Bank Transfer"
              />
            </RadioGroup>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-body border-0 shadow mb-3">
            {value === "paypal" ? (
              <Paypal />
            ) : (
              <div className="text-center">
                <span>Not Implemented Yet</span>
                <br />
                <small className="text-danger">
                  Please select PayPal option
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
