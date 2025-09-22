import React, { useState } from "react";
import QrCode from "../assets/gpay-qr.jpg";
import toast, { Toaster } from "react-hot-toast";

export default function PaymentAndFeedback() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!feedback.trim()) {
      toast.error("Please leave your feedback!");
      return;
    }

    if (rating === 0) {
      toast.error("Please give a rating!");
      return;
    }

    // Success
    console.log({ feedback, rating });
    toast.success("Thank you for your feedback!");

    // Reset form
    setFeedback("");
    setRating(0);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-center mb-10">
        Support & Feedback
      </h2>

      {/* GPay QR */}
      <div className="mb-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Pay via Google Pay</h3>
        <img
          src={QrCode}
          alt="Google Pay QR"
          className="mx-auto w-64 h-64 md:w-80 md:h-80 object-contain border rounded-md shadow-lg"
        />
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Leave your thoughts..."
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
}
