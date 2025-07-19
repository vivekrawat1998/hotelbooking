import React, { useState } from 'react';
import CustomDropdown from '../ui/CustomDropdown';

const BookingRoom = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [category, setCategory] = useState('Business Trip');

    const handleSubmit = () => {
        const message = `
            *Booking Details:*\n\n
            *Name:* ${name}\n
            *Mobile:* ${mobile}\n
            *Email:* ${email}\n
            *Additional Information:* ${info}\n
            *Trip Category:* ${category}
        `;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/7302284131?text=${encodedMessage}`;

        window.location.href = whatsappURL;
    };

    return (
        <div className="relative w-[95%] mb-10 sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[70%] py-5 p-10 bg-white mx-auto rounded-lg shadow-lg">
            <img
                src="/assets/border.png"
                alt="Border"
                className="absolute inset-0 w-full p-3 h-full object-fill pointer-events-none z-10"
            />
            <div className="relative z-20 p-4 sm:p-6 md:p-8 space-y-4">
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className="flex flex-col border border-primary rounded px-4 py-2 w-full">
                        <label className="text-gray-600 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="outline-none text-sec w-full"
                        />
                    </div>

                    <div className="flex flex-col border border-primary rounded px-4 py-2 w-full">
                        <label className="text-gray-600 font-medium mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter your mobile number"
                            className="outline-none text-sec w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col border border-primary rounded px-4 py-2">
                    <label className="text-gray-600 font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="outline-none text-sec w-full"
                    />
                </div>

                <div className="flex flex-col border border-primary rounded px-4 py-2">
                    <label className="text-gray-600 font-medium mb-1">Additional Information</label>
                    <textarea
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                        placeholder="Anything else you'd like to share..."
                        className="outline-none text-sec w-full resize-none"
                        rows={4}
                    />
                </div>

                <CustomDropdown
                    label="Trip Category"
                    options={['Business Trip', 'Solo Trip', 'Family Trip']}
                    selected={category}
                    setSelected={setCategory}
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sec cursor-pointer transition duration-300"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default BookingRoom;
