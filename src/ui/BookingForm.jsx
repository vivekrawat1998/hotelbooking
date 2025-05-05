import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import CustomDropdown from '../ui/CustomDropdown';
const BookingForm = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);

    return (
        <div className="relative w-[90vw] py-10 bg-white max-w-xl mx-auto">
            <img
                src="/assets/border.png"
                alt="Border"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
            />

            <div className="relative z-20 p-6 sm:p-10">
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded whitespace-nowrap w-full">
                    <label className="block text-gray-600 mb-1 pl-2 font-medium">Check-in</label>
                    <div className="flex w-full justify-between items-center rounded-lg px-3 py-2 bg-white">
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            placeholderText="Select date"
                            className="w-full outline-none text-sec"
                        />
                        <CalendarDays className="text-gray-900 mr-2" />

                    </div>
                </div>
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded whitespace-nowrap w-full">
                    <label className="block text-gray-600 mb-1 pl-2 font-medium">Check-out</label>
                    <div className="flex w-full justify-between items-center rounded-lg px-3 py-2 bg-white">
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            placeholderText="Select date"
                            className="w-full outline-none text-sec"
                        />
                        <CalendarDays className="text-gray-900 mr-2" />

                    </div>
                </div>


                <CustomDropdown
                    label="Adults"
                    options={[1, 2, 3, 4, 5]}
                    selected={adults}
                    setSelected={setAdults}
                />

                <CustomDropdown
                    label="Children"
                    options={[0, 1, 2, 3, 4]}
                    selected={children}
                    setSelected={setChildren}
                />

                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sec cursor-pointer transition duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookingForm;
