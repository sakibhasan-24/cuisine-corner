import {
  CardElement,
  CartElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function CheckoutForm() {
  const stripe = useStripe();

  const element = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const [data, refetch] = useCart();
  const { user } = useAuth();
  const totalPrice = data?.reduce((acc, item) => acc + item.price, 0);
  //   console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice]);
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
    // confirm payment
    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user?.displayName || "unKnown",
          },
        },
      }
    );
    if (cardError) {
      console.log("cardError", cardError);
    } else {
      console.log("confirm", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setSuccess("Congrats! Your payment is completed.");
        setTransactionId(paymentIntent.id);
        // now save
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartId: data?.map((item) => item._id),
          menuItemsId: data?.map((item) => item.menuID),
          status: "PENDING",
        };
        const res = await axiosSecure.post("/payment", payment);
        // console.log(res.data);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successfully",
          timer: 1500,
        });
      }
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
        {success && <p>{success}</p>}
      </form>
    </div>
  );
}
