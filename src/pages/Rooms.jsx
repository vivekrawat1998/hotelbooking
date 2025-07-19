import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Title } from '../ui/StyledComponent';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllRooms = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://api.bhagwatbhawan.in/api/v1/room/all',{withCredentials: true});
      setRooms(res.data.rooms);
    } catch (err) {
      console.error("Error fetching rooms", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRooms();
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 bg-white space-y-10">
      <div className="text-center">
        <h2 className="text-primary uppercase font-bold text-xl mb-2">Explore Our Comforts</h2>
        <Title>Choose Your Perfect Room</Title>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading rooms...</p>
      ) : rooms.length === 0 ? (
        <p className="text-center text-red-500">No rooms available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Carousel */}
              <Swiper
                modules={[ Pagination]}
                pagination={{ clickable: true }}
                loop
                className="w-full h-[220px]"
              >
                {room.images.map((img) => (
                  <SwiperSlide key={img._id}>
                    <img
                      src={img.url}
                      alt="Room"
                      className="w-full h-[220px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Room Info */}
              <div className="p-5 space-y-2">
                <h2 className="text-2xl font-semibold text-primary">{room.name}</h2>
                <p className="text-gray-600">Category: <span className="font-medium">{room.category?.name}</span></p>
                <p className="text-gray-600">Type: <span className="font-medium">{room.ac ? "AC" : "Non-AC"}</span></p>
                <p className="text-sm text-gray-400">
                  Added on: {new Date(room.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* "Book Now" Button */}
                <Link
                  to={`/room/${room._id}`}
                  className="inline-block mt-4 bg-[#FFA500] text-white font-semibold py-2 px-5 rounded-md shadow hover:bg-[#e69500] transition-all duration-200"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
