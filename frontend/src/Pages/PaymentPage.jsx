import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import MessageModal from "../Components/MessageModal";

const stripePromise = loadStripe("pk_test_51R5p0rL5p81dKEBAlFjgRGsGvCObzc5dvjqVLaIUloW2qiqf4uwZAAarGdjRFqpBTPcHeJZyAZ1eEgtVWBoENjji00jjNCT5m5");

const PaymentPage = () => {
  const { state } = useLocation();
  const [clientSecret, setClientSecret] = useState("");
  const [modal, setModal] = useState({ isOpen: false, message: "", type: "" });

  useEffect(() => {
    if (!state?.amount) {
      setModal({ isOpen: true, message: "No payment amount provided.", type: "error" });
      return;
    }

    fetch("http://localhost:3000/api/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: state.amount * 100, currency: "usd" }), // Convert to cents
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        setModal({
          isOpen: true,
          message: `Error initializing payment: ${error.message}`,
          type: "error",
        });
      });
  }, [state]);

  const closeModal = () => setModal({ ...modal, isOpen: false });

  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <div className="relative z-10 max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-blue-700">Complete Your Payment</h2>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        ) : (
          <p>Loading payment details...</p>
        )}
      </div>
      {modal.isOpen && <MessageModal message={modal.message} type={modal.type} onClose={closeModal} />}
    </div>
  );
};

export default PaymentPage;