import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import CustomDropdown from '../ui/CustomDropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkhout = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [acOption, setAcOption] = useState('AC');
    const navigate = useNavigate();
    const { roomId } = useParams();

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const userId = userProfile?.userId || userProfile?._id;

    const handleBooking = async () => {
        try {
            if (!userProfile) {
                toast.error("You need to log in to make a booking.");
                navigate('/login');
                return;
            }

            if (!checkIn || !checkOut) {
                toast.error("Please select both check-in and check-out dates.");
                return;
            }

            const response = await fetch('https://api.bhagwatbhawan.in/api/v1/booking/book-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                body: JSON.stringify({
                    roomId,
                    userId,
                    checkInDate: checkIn.toISOString(),
                    checkOutDate: checkOut.toISOString(),
                    acOption,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Booking successful!");
                navigate(`/payment/${data.booking._id}`);
            } else {
                toast.error(`Booking failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Booking error:', error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="relative w-[90vw] py-10 bg-white max-w-xl mx-auto">
            <img
                src="/assets/border.png"
                alt="Border"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
            />

            <div className="relative z-20 p-6 sm:p-10">
                {/* Check-in Date */}
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded w-full">
                    <label className="block text-gray-600 pl-2 font-medium">Check-in</label>
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

                {/* Check-out Date */}
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded w-full">
                    <label className="block text-gray-600 pl-2 font-medium">Check-out</label>
                    <div className="flex w-full justify-between items-center rounded-lg px-3 py-2 bg-white">
                        <DatePicker
                            selected={checkOut}
                            onChange={(date) => setCheckOut(date)}
                            selectsEnd
                            startDate={checkIn}
                            endDate={checkOut}
                            placeholderText="Select date"
                            className="w-full outline-none text-sec"
                        />
                        <CalendarDays className="text-gray-900 mr-2" />
                    </div>
                </div>

                <CustomDropdown
                    label="AC Option"
                    options={['AC', 'Non-AC']}
                    selected={acOption}
                    setSelected={setAcOption}
                />

                <button
                    onClick={handleBooking}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sec cursor-pointer transition duration-300 mt-4"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Checkhout;
