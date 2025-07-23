import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../ui/Profile';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Roomdescription from './Roomdescription';
import Categorycard from './Categorycard';
import Categorydetailcard from './Categorydetailcard';
import Forroomdetails from './Forroomdetails';
import AllRooms from './AllRooms';
import { Paragraph } from "../ui/StyledComponent"
import axios from 'axios';

const Roomdetails = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const res = await axios.get(`https://api.bhagwatbhawan.in/api/v1/room//${roomId}`);

                if (res.data.success) {
                    setRoomDetails(res.data.room);
                    console.log(res.data.room);
                } else {
                    setRoomDetails(null);
                }
            } catch (error) {
                console.error("Error fetching room details:", error);
            }
        };

        if (roomId) {
            fetchRoomDetails();
        }
    }, [roomId]);

    if (!roomDetails) {
        return <div>Loading...</div>;
    }

    return (
        <section className='bg-white px-3'>
            <Profile title={"Room Details"} height='h-[50vh]' />

            {/* Display Room Details */}
            <section className="p-5 md:p-10">
                <div className="mt-10 p-5 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Room Details</h2>

                    <h3 className="text-xl font-bold uppercase">{roomDetails.name}</h3>
                    <Paragraph className="mt-2">{roomDetails.description}</Paragraph>
                    <div className="mt-4">
                        <h4 className="font-semibold">Price: ₹{roomDetails.basePricePerNight} / night</h4>
                    </div>

                    {/* Images Slider */}
                    <div className="mt-6">
                        <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="rounded-xl overflow-hidden w-full">
                            {roomDetails.images?.map((img) => (
                                <SwiperSlide key={img._id}>
                                    <img src={img.url} alt="room" className="w-full object-fit h-[70vh]" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <Roomdescription />
            <AllRooms />
        </section>
    );
};

export default Roomdetails;
