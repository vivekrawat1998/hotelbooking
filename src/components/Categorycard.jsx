import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Paragraph, Title } from '../ui/StyledComponent';
import { FaWifi, FaTv, FaUtensils, FaSwimmer, FaSpa } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link, useNavigate } from 'react-router-dom';
import { useRoomContext } from '../context/Roomcontext';

const amenities = [
    { icon: <FaWifi className="text-xl text-primary" />, label: 'Free Wi-Fi' },
    { icon: <FaTv className="text-xl text-primary" />, label: 'LED TV' },
    { icon: <FaUtensils className="text-xl text-primary" />, label: 'Room Service' },
    { icon: <FaSwimmer className="text-xl text-primary" />, label: 'Swimming Pool' },
    { icon: <FaSpa className="text-xl text-primary" />, label: 'Spa & Wellness' },
];

const Categorycard = ({ categoryId }) => {
    const swiperRef = useRef(null);
    const [rooms, setRooms] = useState([]);
    const { setCategoryId, setRoomId } = useRoomContext();
    const navigate = useNavigate();  

    useEffect(() => {
        if (!categoryId) return;

        const fetchRooms = async () => {
            try {
                const res = await axios.get(`https://api.bhagwatbhawan.in/api/v1/room/category/${categoryId}`,{withCredentials: true});
                if (res.data.success) {
                    setRooms(res?.data?.rooms);
                } else {
                    setRooms([]);
                }
            } catch (error) {
                console.error("Error fetching rooms by category:", error.message);
            }
        };

        fetchRooms();
    }, [categoryId]);

    const handleBookNow = (room) => {
        setCategoryId(categoryId);
        setRoomId(room._id);
        navigate(`/room/${room._id}`); 
    };

    return (
        <div className="w-full relative grid grid-cols-1 md:grid-cols-2 mb-20 overflow-hidden rounded-xl mt-20 items-center">
            {/* Image Slider */}
            <div className="order-1 md:order-2 relative w-full h-full flex justify-center items-center">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-full rounded-xl"
                >
                    {rooms.flatMap((room) =>
                        room.images.map((image, idx) => (
                            <SwiperSlide key={`${room._id}-${idx}`}>
                                <img
                                    src={image.url}
                                    alt={room.name}
                                    className="w-full h-[300px] md:h-[70vh] object-cover rounded-xl"
                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>

                {/* Custom Pagination */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                    {rooms.flatMap((room) => room.images).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => swiperRef.current?.slideToLoop(idx)}
                            className="w-3 h-3 rounded-full bg-black hover:bg-primary transition-all duration-300"
                        ></button>
                    ))}
                </div>
            </div>

            {/* Text & Amenities */}
            <div className="order-2 md:order-1 w-full h-full py-12 px-6 md:px-10 bg-[#3D3931]">
                <h1 className="text-lg font-semibold uppercase text-primary mb-2">Why We Are Best</h1>
                <Title className="text-white">
                    {rooms[0]?.name || "Luxury Room"}
                </Title>
                <Paragraph className="mb-6 text-white">
                    {rooms[0]?.description || `Our rooms are designed to provide premium comfort and services for a memorable stay.`}
                </Paragraph>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex items-center text-white gap-3">
                            <div className="bg-[#EDE8E4] p-2 rounded-full">{item.icon}</div>
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Book Now Button */}
                <button 
                    onClick={() => handleBookNow(rooms[0])} // Use the first room for now or modify based on selection
                    className="bg-white px-10 py-5 rounded mt-10"
                >
                    Book now
                </button>
            </div>
        </div>
    );
};

export default Categorycard;
