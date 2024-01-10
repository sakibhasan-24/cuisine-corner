import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

export default function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
  return (
    <div>
      <SectionTitle title={"READY TO PAY?"} text={"PAY TO EAT"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
