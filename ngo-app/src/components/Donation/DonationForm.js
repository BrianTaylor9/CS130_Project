import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { defaultTransaction } from "../../data/data";
import { sendMail } from "../../utils/mailer";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import '../../styles/donation.css'

// Stripe imports for payment processing
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeForm from './StripeForm';
const stripePromise = loadStripe('pk_test_51Oq5JQDARKsSSkkt2I0TnciYSfi6NBKNWA4XB5WApLdM1r6CmHnt4a8GCEx8K4LGLrF6aZAgdtvrjvmk7fY4M6Cu004LmAH6UQ');

// Main component for handling donations
export default function DonationForm({ card }) {
  const [money, setMoney] = useState("");
  const [transaction, setTransaction] = useState(defaultTransaction);

  // Handles change in donation amount input
  const handleMoney = (e) => {                                                   
    setMoney(e.target.value);
    setTransaction({ ...transaction, amount: e.target.value });
  };

  // Function to update donation amount with predefined values
  function updateMoney(amt) {
    if (amt > 0) {
      setMoney(amt);
    } else {
      setMoney("");
      const amttxt = document.getElementsByClassName("amttxt")[0];
      amttxt.focus();
    }

    setTransaction({ ...transaction, amount: amt });
  }

  // Handles change in form inputs other than amount
  const handleInputs = (e) => {
    let name = e.target.name;

    if (name === "isAnonymous") {
      setTransaction({ ...transaction, [name]: e.target.checked });
    } else {
      let val = e.target.value;
      setTransaction({ ...transaction, [name]: val });
    }
  };

  // Function called upon successful donation
  const onSuccessfulDonate = () => {
    // Resetting transaction state to default
    setTransaction(defaultTransaction);
    
    // Resetting the money state to an empty string
    setMoney("");
    alert("Thank you for your donation!");

  };

  return (
  <>
    <Elements stripe={stripePromise} >
        <div className="donationFormGrid">
          <div className="donationForm">
            <div className="amtBox">
              <div className="ruppee">$</div>
              <input
                type="number"
                min={0}
                className="amttxt"
                onChange={handleMoney}
                value={money}
              />
            </div>
            <div className="options">
              <div className="item" onClick={() => updateMoney(50)} amt={50}>
                50
              </div>
              <div className="item" onClick={() => updateMoney(100)} amt={100}>
                100
              </div>
              <div className="item" onClick={() => updateMoney(200)} amt={200}>
                200
              </div>
              <div className="item" onClick={() => updateMoney(500)} amt={500}>
                500
              </div>
              <div className="item" onClick={() => updateMoney(-1)}>
                Custom Input
              </div>
            </div>

            <div className="infoBox">
              <div className="row">
                <div className="row_half">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    className="half"
                    onChange={handleInputs}
                    value={transaction.fname}
                  />
                </div>
                <div className="row_half">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    className="half"
                    onChange={handleInputs}
                    value={transaction.lname}
                  />
                </div>
              </div>
              <div className="row">
                <div className="row_full">
                  <label>Email Address</label>

                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="full"
                    onChange={handleInputs}
                    value={transaction.email}
                  />
                </div>
              </div>

              <div className="row">
                <div className="row_full">
                  <FormControlLabel
                    className="checkbox"
                    control={
                      <Checkbox
                        checked={transaction.isAnonymous}
                        onChange={handleInputs}
                        name="isAnonymous"
                      />
                    }
                    label="Make this an anonymous donation"
                  />
                  <Tooltip
                    className="tooltip"
                    title={
                      <h3 className="tooltip_txt">
                        Would you like to prevent your name, amount and image from
                        being publicly displayed?
                      </h3>
                    }
                    arrow
                    interactive
                    TransitionComponent={Zoom}
                  >
                    <HelpOutlineOutlinedIcon />
                  </Tooltip>
                </div>
              </div>

              <div className="row">
                <div className="row_full">
                  <label>Comments</label>

                  <textarea
                    placeholder="Comments"
                    name="comment"
                    className="full"
                    onChange={handleInputs}
                    value={transaction.comment}
                  />
                </div>
              </div>

              <div className="row">
                <p className="label">Donation Total :</p>
                <p className="amt">${money}</p>
              </div>
            </div>
          </div>
          <StripeForm money={money} onSuccessfulDonate={onSuccessfulDonate} />
        </div>
    </Elements>
  </> 
  );
}