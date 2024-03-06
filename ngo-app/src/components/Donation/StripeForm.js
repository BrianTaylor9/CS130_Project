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
    // Call onSuccessfulDonate when donation is successful

  return (
    <>
      <CardElement />
      <Button onClick={handleDonate}>
        <FavoriteIcon />
        Donate
      </Button>
    </>
  );
  };

export default StripeForm;