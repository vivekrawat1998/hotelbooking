import React, { useState } from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import Checkhout from './Checkhout';
import {
  FaWifi, FaSwimmer, FaConciergeBell, FaCoffee,
  FaParking, FaSnowflake
} from 'react-icons/fa';
import { MdBalcony } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We offer premium accommodation, daily housekeeping, guided darshan packages, and full concierge support for temple visits and local sightseeing."
  },
  {
    question: "How can I make a booking?",
    answer: "You can book directly through our website or contact our front desk. Walk-in bookings are also welcome based on availability."
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes, we offer seasonal discounts, special pilgrimage packages, and group offers for devotees visiting in groups or on yatras."
  },
  {
    question: "Are pets allowed?",
    answer: "For the comfort of all guests and sanctity of the premises, we currently do not allow pets at Bhagwat Bhawan."
  },
];

const Roomdescription = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-10'>
      {/* LEFT COLUMN */}
      <div className='space-y-10'>

        {/* Description */}
        <div className="space-y-4">
          <Title>Description</Title>
          <Paragraph>
            Bhagwat Bhawan offers more than just a stay — it provides a soulful sanctuary amidst the spiritual essence of Mathura. Nestled close to sacred landmarks like Krishna Janmabhoomi and Prem Mandir, our rooms are designed for peace, reflection, and divine comfort. Whether you're visiting for darshan, rejuvenation, or celebration, Bhagwat Bhawan welcomes you to experience Mathura’s divine hospitality.
          </Paragraph>
        </div>

        {/* Check-in / Check-out */}
        <div className='flex flex-col md:flex-row gap-10'>
          <div>
            <span className='flex items-center gap-3'>
              <AiOutlineClockCircle size={30} className="text-primary" />
              <p className='text-2xl text-primary'>Check In</p>
            </span>
            <Paragraph>
              Guests can check in from 12:00 PM. Early check-in is available on request, subject to availability.
            </Paragraph>
          </div>

          <div>
            <span className='flex items-center gap-3'>
              <AiOutlineClockCircle size={30} className="text-primary" />
              <p className='text-2xl text-primary'>Check Out</p>
            </span>
            <Paragraph>
              Standard check-out time is 11:00 AM. Late check-out can be arranged based on availability.
            </Paragraph>
          </div>
        </div>

        {/* Amenities */}
        <div className='space-y-4'>
          <Title>Amenities</Title>
          <ul className="space-y-2 grid md:grid-cols-3 grid-cols-2 text-gray-700">
            <li className="flex items-center gap-3"><FaWifi /> Free Wi-Fi</li>
            <li className="flex items-center gap-3"><FaSnowflake /> Air Conditioning</li>
            <li className="flex items-center gap-3"><FaSwimmer /> Swimming Pool</li>
            <li className="flex items-center gap-3"><MdBalcony /> Private Balcony</li>
            <li className="flex items-center gap-3"><FaConciergeBell /> 24/7 Room Service</li>
            <li className="flex items-center gap-3"><FaCoffee /> Satvik Breakfast</li>
            <li className="flex items-center gap-3"><FaParking /> Free Parking</li>
          </ul>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          <Title>Frequently Asked Questions</Title>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 rounded-xl border-primary transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-lg md:text-xl text-sec font-semibold p-4 focus:outline-none"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 text-xl ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="text-sec mt-2 mb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Checkout */}
      <div>
        <Checkhout />
      </div>
    </section>
  );
};

export default Roomdescription;
