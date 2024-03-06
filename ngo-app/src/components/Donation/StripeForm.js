// StripeForm.js
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StripeForm = ({ money, onSuccessfulDonate }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
  
    // Assuming you have an endpoint to create a payment intent
    const response = await fetch('http://localhost:4000/recievePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: money, currency: 'USD'}),
    });
    const paymentIntent = await response.json();
  
    const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
  
    if (result.error) {
      console.log(result.error.message);
      // Handle errors here
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        // sendMail(transaction);
        // setTransaction(defaultTransaction);
        // You can also redirect the user or show a success message
      }
    }
  };
  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  return (
    <div className="payment-form">
      <label htmlFor="card-element">Credit or Debit Card</label>
      <div className="card-element-container">
        <CardElement id="card-element" options={cardElementOptions} />
      </div>
      <Button 
        style={{
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          textTransform: 'none',
          fontWeight: 'bold',
          backgroundColor: '#E53935',
          color: 'white',
          fontSize: '18px',
          padding: '15px 30px',
          marginTop: '20px',
        }}
        onClick={handleDonate}>
         <FavoriteIcon style={{ color: 'white', marginRight: '8px' }} />
        Donate
      </Button>
    </div>
  );   
  };

export default StripeForm;