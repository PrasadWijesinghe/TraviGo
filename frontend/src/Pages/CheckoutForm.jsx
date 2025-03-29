import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageModal from "../Components/MessageModal";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, message: "", type: "" });
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      setModal({ isOpen: true, message: "Payment system not ready.", type: "error" });
      setLoading(false);
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement,
        billing_details: { address: { postal_code: postalCode } },
      },
    });

    if (error) {
      setModal({ isOpen: true, message: error.message, type: "error" });
    } else if (paymentIntent.status === "succeeded") {
      setModal({
        isOpen: true,
        message: "Payment Done & Booking Confirmed!",
        type: "success",
      });
    }
    setLoading(false);
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    if (modal.type === "success") navigate("/");
  };

  const stripeElementStyles = {
    base: {
      fontSize: "16px",
      color: "#0A1931",
      "::placeholder": { color: "#6B7280" },
    },
    invalid: { color: "#9E2146" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1931] to-[#05101E] flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-8"
      >
        <h3 className="text-3xl font-bold text-[#D4AF37] font-playfair text-center mb-8">
          Complete Your Payment
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0A1931] mb-2">Card Number</label>
            <div className="p-4 bg-[#F5F5F5] rounded-lg">
              <CardNumberElement options={{ style: stripeElementStyles }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0A1931] mb-2">Expiry Date</label>
              <div className="p-4 bg-[#F5F5F5] rounded-lg">
                <CardExpiryElement options={{ style: stripeElementStyles }} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A1931] mb-2">CVC</label>
              <div className="p-4 bg-[#F5F5F5] rounded-lg">
                <CardCvcElement options={{ style: stripeElementStyles }} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0A1931] mb-2">Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="12345"
              className="p-4 bg-[#F5F5F5] rounded-lg w-full text-[#0A1931] focus:ring-2 focus:ring-[#D4AF37] outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 bg-[#D4AF37] text-[#0A1931] py-4 rounded-lg w-full text-lg font-semibold hover:bg-[#E6C567] transition-colors"
          disabled={loading || !stripe || !clientSecret}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {modal.isOpen && (
        <MessageModal message={modal.message} type={modal.type} onClose={closeModal} showContinue={modal.type === "success"} />
      )}
    </div>
  );
};

export default CheckoutForm;