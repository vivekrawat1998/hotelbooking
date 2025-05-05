import React, { useState } from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';

const faqs = [
    {
        question: "What services do you provide?",
        answer: "We offer luxury accommodation, spa services, guided tours, and all-inclusive packages tailored to your needs."
    },
    {
        question: "How can I make a booking?",
        answer: "You can book directly through our website, mobile app, or by calling our reservation desk."
    },
    {
        question: "Do you offer any discounts?",
        answer: "Yes, we have seasonal discounts and early-bird offers. Subscribe to our newsletter for updates."
    },
    {
        question: "Are pets allowed?",
        answer: "Yes, we are a pet-friendly resort with designated areas for pets."
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
                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                    alt="Resort"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side Accordion */}
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">FREQUENTLY ASKED QUESTIONS</h2>
                <Title>Our Expert Answers</Title>
                <Paragraph>
                    Zenean sed rutrum purus. Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehicula Nullam iaculis metus nehicula
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
                                className={`px-4 overflow-hidden transition-all duration-500  ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
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
