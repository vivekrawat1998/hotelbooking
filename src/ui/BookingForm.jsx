import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import CustomDropdown from '../ui/CustomDropdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const [rooms, setRooms] = useState([]);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [acOption, setAcOption] = useState('AC');
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const userId = userProfile?.userId || userProfile?._id;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('https://api.bhagwatbhawan.in/api/v1/room/all', { withCredentials: true });
                setRooms(res?.data?.rooms);
            } catch (err) {
                console.error("Error fetching rooms", err);
            }
        };
        fetchRooms();
    }, []);

    const handleRoomChange = (e) => {
        setSelectedRoomId(e.target.value);
    };

    const handleBooking = async () => {
        if (!userProfile) {
            alert("You need to log in to make a booking.");
            navigate('/login');
            return;
        }

        if (!checkIn || !checkOut || !selectedRoomId || !userId) {
            alert("Please select all required fields.");
            return;
        }

        const bookingDetails = {
            roomId: selectedRoomId,
            userId: userId,
            checkInDate: checkIn.toISOString(),
            checkOutDate: checkOut.toISOString(),
            acOption,
        };

        try {
            const response = await fetch('https://api.bhagwatbhawan.in/api/v1/booking/book-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Booking successful! Total Price: ₹${data?.booking.totalAmount}`);
                navigate(`/payment/${data?.booking._id}`);
            } else {
                alert(`Booking failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="relative w-[90vw]  z-10py-10 bg-white max-w-xl mx-auto">
            <img
                src="/assets/border.png"
                alt="Border"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
            />

            <div className="relative z-20 p-6 sm:p-10">
                {/* Room selection */}
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded w-full">
                    <label className="text-gray-600 pl-2 font-medium">Select Room</label>
                    <select
                        value={selectedRoomId}
                        onChange={handleRoomChange}
                        className="w-full outline-none text-sec bg-white rounded-lg border-primary border py-2 px-3"
                    >
                        <option value="" disabled>Select a room</option>
                        {rooms?.map((room) => (
                            <option key={room._id} value={room._id}>
                                {room.name} - {room.category?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Check-in */}
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded w-full">
                    <label className="text-gray-600 pl-2 font-medium">Check-in</label>
                    <div className="flex w-full justify-between items-center px-3">
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            placeholderText="Select date"
                            className="w-full outline-none text-sec"
                        />
                        <CalendarDays className="text-gray-900 ml-2" />
                    </div>
                </div>

                {/* Check-out */}
                <div className="mb-4 flex border-primary border gap-5 py-2 rounded w-full">
                    <label className="text-gray-600 pl-2 font-medium">Check-out</label>
                    <div className="flex w-full justify-between items-center px-3">
                        <DatePicker
                            selected={checkOut}
                            onChange={(date) => setCheckOut(date)}
                            selectsEnd
                            startDate={checkIn}
                            endDate={checkOut}
                            placeholderText="Select date"
                            className="w-full outline-none text-sec"
                        />
                        <CalendarDays className="text-gray-900 ml-2" />
                    </div>
                </div>

                <CustomDropdown
                    label="AC Option"
                    options={['AC', 'Non-AC']}
                    selected={acOption}
                    setSelected={setAcOption}
                />

                <button
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sec cursor-pointer transition duration-300 mt-4"
                    onClick={handleBooking}
                    disabled={!selectedRoomId || !checkIn || !checkOut}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookingForm;
