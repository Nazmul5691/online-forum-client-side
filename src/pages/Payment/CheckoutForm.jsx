/* eslint-disable no-undef */

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';


const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
//   const [cart] = useCart();
  const totalPrice = 100;

  useEffect( () =>{
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('Error:', error);
      setError(error.message);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      setError('');
    }


    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
        card: card,
        billing_details: {
          email: user?.email || 'anonymous', 
          name: user?.displayName ||  'anonymous'
        }
      }
    })
    if(confirmError){
      console.log('confirm error');
    }
    else{
      console.log('payment Intent', paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        
        



        const payment = {
            email: user.email,
            price: totalPrice,
            date: new Date(),
            status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log(res);
        
      }
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {transactionId && <p className='text-green-600 mb-10'>  <span className='text-2xl text-green-500 '>Payment Success</span>  <br /> <span className='text-black'>Your transaction id:</span> {transactionId}</p> }
    </form>
  );
};

export default CheckoutForm;
