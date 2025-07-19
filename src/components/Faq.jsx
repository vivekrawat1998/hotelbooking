import React, { useState } from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';

const faqs = [
    {
        question: "How can I book a room at Bhagwat Bhawan?",
        answer: "You can easily book your stay through our website’s booking form or call our reservation desk directly. Walk-ins are also welcome, subject to availability."
    },
    {
        question: "How far is Bhagwat Bhawan from Krishna Janmabhoomi?",
        answer: "We are located just minutes away from Krishna Janmabhoomi and other major temples, making it very convenient for darshan and sightseeing."
    },
    {
        question: "What facilities are available at the property?",
        answer: "We offer clean and serene rooms, spiritual ambience, hot water, AC/Non-AC options, 24/7 reception, and easy access to nearby pilgrimage spots."
    },
    {
        question: "Do you provide parking and meal options?",
        answer: "Yes, we have secure parking space and can assist you with sattvik meals or recommend nearby prasad bhojanalayas."
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // default open

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full py-24 px-6 md:px-20 items-center bg-gray-100">
            {/* Left Side Image */}
            <div className="w-full">
                <img
                    src="/WhatsApp Image 2025-07-08 at 10.03.40.jpeg"
                    alt="Bhagwat Bhawan"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side Accordion */}
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">FREQUENTLY ASKED QUESTIONS</h2>
                <Title>Common Queries Answered</Title>
                <Paragraph>
                    Have questions before your divine stay? Here are some of the most common things our guests ask us about Bhagwat Bhawan and their visit to Mathura.
                </Paragraph>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 rounded-xl border-primary transition-all duration-300 ease-in-out"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-xl text-sec font-semibold p-4 focus:outline-none"
                            >
                                {faq.question}
                                <span
                                    className={`transform transition-transform duration-300 text-xl ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    ▼
                                </span>
                            </button>
                            <div
                                className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-sec mt-2 mb-2">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
