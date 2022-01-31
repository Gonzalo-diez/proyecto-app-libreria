import React, { useState } from "react"
import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement, useStripe, useElements,} from "@stripe/react-stripe-js"

const stripePromise = loadStripe("pk_test_51KNlfVF8sQ075GSPu0mkusoOFSyaeqb6VakIz0c2FdzGUqGHnLhciNtlQKa0E4G8g0V1RplvqJld4MxaksoZBGTi005PLxAjQ7")

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [loading, setLoading] = useState(false);

    const compra = () => {
        alert("Su compra ha sido realizada")
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      setLoading(true);
  
      if (!error) {
        // console.log(paymentMethod)
        const { id } = paymentMethod;
        try {
          const { data } = await JSON.post(
            "http://localhost:3001/api/checkout",
            {
              id,
              amount: 10000, //cents
            }
          );
          console.log(data);
  
          elements.getElement(CardElement).clear();
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
    };
  
    console.log(!stripe || loading);
  
    return (
      <form className="checkout-box" onSubmit={handleSubmit}>
        {/* User Card Input */}
        <div className="form-group">
          <CardElement />
        </div>
  
        <button disabled={!stripe} onClick={compra} className="btn btn-success">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Realizar compra"
          )}
        </button>
      </form>
    );
  };

function CheckOut() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default CheckOut