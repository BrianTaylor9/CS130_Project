// StripeForm.js
import React, { useState, useEffect } from 'react';
// Import Stripe elements and Material UI components
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';

// StripeForm component accepting props for handling donations
const StripeForm = ({ money, onSuccessfulDonate }) => {
  const stripe = useStripe();
  const elements = useElements();
  // State for managing payment success and errors
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5); // Countdown starts from 5 seconds
  const [paymentError, setPaymentError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (paymentSuccess && redirectCountdown > 0) {
      timer = setTimeout(() => {
        setRedirectCountdown(redirectCountdown - 1);
      }, 1000);
    } else if (redirectCountdown === 0) {
      navigate('/donate'); // Redirect to donations page when countdown reaches zero
      window.scrollTo(0, 0);
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [paymentSuccess, redirectCountdown, navigate]);

  // Function to handle donation logic
  const handleDonate = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) { // Check if Stripe is properly initialized
      return;
    }
  
    // Creating a payment intent by sending a request to your server
    const response = await fetch('http://localhost:4000/recievePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: money*100, currency: 'USD'}),
    });
    const paymentIntent = await response.json();
  
    // Confirming the card payment with Stripe
    const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
  
    // Handling the payment result
    if (result.error) {
      setPaymentError(result.error.message); // Set error message on failure
    } else if (result.paymentIntent.status === 'succeeded') {
      setPaymentSuccess(true); // Set payment success state on success
      setPaymentError(''); // Clear any errors
    }    
  };

  // Styling options for the CardElement
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

  // Render the form, CardElement, and dynamic alerts for success/error messages
  return (
    <div className="payment-form">
      {paymentError && (
        <Alert variant="filled" severity="error">
          {paymentError}
        </Alert>
      )}
      {paymentSuccess && (
        <>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Payment successful! Redirecting to donations page in {redirectCountdown} seconds...
          </Alert>
        </>
      )}
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

export default StripeForm; // Export the StripeForm component
