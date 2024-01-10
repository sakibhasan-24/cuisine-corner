import {
  CardElement,
  CartElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // logic one
    if (!stripe || !element) {
      return;
    }
    // logic two
    const card = element.getElement(CardElement);

    if (card === null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="shadow-lg p-8">
        <CardElement
          options={{
            style: {
              base: {
                padding: "10px",
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-slate-600 font-bold text-white rounded-md p-4 mt-4 "
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
}
