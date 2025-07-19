import React, { useState } from 'react';
import axios from 'axios';
import { Title, Paragraph } from '../ui/StyledComponent';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { base_url } from '../utils/Baseurl';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', Phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await axios.post(`${base_url}/api/v1/contactQuery/`, form); 
      setStatus({ type: 'success', message: res.data.message });
      setForm({ name: '', email: '', Phone: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="bg-white w-full py-20 px-6 md:px-20 space-y-14">
      {/* Title Section */}
      <div className="text-center max-w-2xl mt-10 mx-auto space-y-4">
        <h1 className="text-[#FFA500] font-bold uppercase text-xl">Get in Touch</h1>
        <Title>Contact Bhagwat Bhawan</Title>
        <Paragraph>
          Whether you have a question, a booking request, or simply want to connect — we're here to help.
          Reach out to us or drop by at our serene location in the heart of Mathura.
        </Paragraph>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info + Map */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <span className="text-gray-700 text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl" />
              <span className="text-gray-700 text-lg">info@bhagwatbhawan.com</span>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <span className="text-gray-700 text-lg">
                Bhagwat Bhawan, Near Krishna Janmabhoomi, Mathura, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Bhagwat Bhawan Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1438599919457!2d77.67332097437694!3d27.492383837861624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371010a2b6c39%3A0x6c1c2f4efc2c4c6a!2sShri%20Krishna%20Janmasthan%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-xl" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-primary"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-primary"
              required
            />
          </div>
          <input
            type="text"
            name="Phone"
            value={form.Phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-primary"
          />
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-primary"
            required
          ></textarea>
          {status && (
            <div className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </div>
          )}
          <button
            type="submit"
            className="bg-sec text-white font-semibold py-3 px-6 rounded-md hover:bg-sec/60 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
