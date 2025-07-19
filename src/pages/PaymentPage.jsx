import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PaymentPage = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState(null);

  // Fetch booking data
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          `https://api.bhagwatbhawan.in/api/v1/booking/${bookingId}`,{withCredentials: true}
        );
        setBooking(res.data.booking);
      } catch (err) {
        console.error(err);
        alert("Failed to load booking details.");
      }
    };
    fetchBooking();
  }, [bookingId]);

  // Upload screenshot to API
  const handleSubmitScreenshot = async () => {
    if (!paymentScreenshot?.file) {
      alert("Please upload a payment screenshot before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("images", paymentScreenshot.file);

    try {
      setUploading(true);
      const res = await axios.post("https://api.bhagwatbhawan.in/api/v1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploading(false);

      if (res.data.length > 0) {
        const imageUrl = res.data[0].url;
        setUploadUrl(imageUrl);
        alert("Payment proof uploaded successfully!");

        // Optional: send imageUrl to update the booking
        // await axios.put(`https://api.bhagwatbhawan.in/api/v1/booking/${bookingId}/proof`, { proofUrl: imageUrl });

        setPaymentScreenshot(null);
      } else {
        alert("Upload failed. No URL returned.");
      }
    } catch (error) {
      setUploading(false);
      console.error("Upload failed:", error);
      alert("Upload failed. Try again later.");
    }
  };

  if (!booking)
    return <p className="text-center mt-10 text-gray-600">Loading booking details...</p>;

  return (
    <section className="max-w-6xl mt-20 mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Side - Booking Info */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">
          Booking & Payment Summary
        </h2>

        <div className="space-y-6 text-gray-800 text-lg">
          <DetailRow label="Room ID:" value={booking.room?._id} />
          <DetailRow label="Check-In:" value={new Date(booking.checkInDate).toLocaleDateString()} />
          <DetailRow label="Check-Out:" value={new Date(booking.checkOutDate).toLocaleDateString()} />
          <DetailRow label="AC Option:" value={booking.acOption} />
          <DetailRow label="Nights:" value={booking.nights} />
          <DetailRow label="Total Amount:" value={`₹${booking.totalAmount}`} />
          <DetailRow label="Status:" value={booking.status} />
          <DetailRow label="Payment Status:" value={booking.paymentStatus} />
        </div>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <FaCreditCard size={28} className="text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Payment Info</h3>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <AiOutlineCheckCircle size={28} className="text-green-600" />
            <span className="text-green-600 font-medium">Secure Manual Payment</span>
          </div>
          <ul className="mt-6 flex flex-wrap gap-4 justify-center text-gray-600 text-base font-medium">
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow">Credit/Debit Card</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow">UPI</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow">Wallets</li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow">Net Banking</li>
          </ul>
        </div>

        <div className="mt-10 space-y-4 text-sm text-gray-500">
          <p><strong>Terms:</strong> By submitting payment proof, you agree to manual verification.</p>
          <p><strong>Need help?</strong> Contact support via email or phone for assistance.</p>
        </div>
      </div>

      {/* Right Side - QR Payment & Screenshot Upload */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-300 shadow-inner flex flex-col items-center space-y-8">
        <h3 className="text-3xl font-bold text-gray-800">Scan & Pay via UPI</h3>

        <img
          src="/assets/qr-code.png"
          alt="UPI QR Code"
          className="w-64 h-64 border border-gray-400 rounded-lg shadow-lg"
        />

        <p className="text-center text-gray-600">
          Please scan this QR code using any UPI app and pay ₹{booking.totalAmount}.
        </p>

        {/* Upload Input */}
        <div className="w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Upload Payment Screenshot:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const previewUrl = URL.createObjectURL(file);
                setPaymentScreenshot({ file, preview: previewUrl });
              }
            }}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          {paymentScreenshot?.preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <img
                src={paymentScreenshot.preview}
                alt="Payment Screenshot"
                className="w-full max-h-60 object-contain border rounded-md"
              />
            </div>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleSubmitScreenshot}
          disabled={uploading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
        >
          {uploading ? "Uploading..." : "📤 Submit Payment Proof"}
        </button>

        {/* Uploaded URL */}
        {uploadUrl && (
          <div className="mt-4 text-green-700 text-sm">
            Payment proof uploaded:{" "}
            <a href={uploadUrl} target="_blank" rel="noopener noreferrer" className="underline">
              View Screenshot
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

// Reusable detail row
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <p className="font-semibold text-gray-700">{label}</p>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default PaymentPage;
