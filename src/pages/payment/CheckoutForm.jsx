import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react';
// import "./checkoutForm.css"

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("")
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error} = await stripe.createPaymentMethod({
            type:"card",
            card
        })

        if(error){
            console.log("Error", error)
            setErrorMessage(error.message)
        }else{
            setErrorMessage("");
        }


    }
  return (
    <>
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
        <button className='paybtn' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
    </>
  )
}

export default CheckoutForm