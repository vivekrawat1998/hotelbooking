import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Title } from '../ui/StyledComponent';

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllRooms = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://api.bhagwatbhawan.in/api/v1/room/all', {withCredentials: true});
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
    <div className="w-full py-16 px-6 md:px-20 space-y-10 bg-white">
      <div className="text-center">
        <h2 className="text-[#FFA500] uppercase font-bold text-xl mb-2">Our Rooms</h2>
        <Title>Explore All Rooms at Bhagwat Bhawan</Title>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading rooms...</p>
      ) : rooms.length === 0 ? (
        <p className="text-center text-red-500">No rooms available.</p>
      ) : (
        <Swiper
          modules={[ Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room._id}>
              <div className="bg-white border shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Nested Image Swiper */}
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-[220px]"
                >
                  {room.images.map((img) => (
                    <SwiperSlide key={img._id}>
                      <img
                        src={img.url}
                        alt={room.name}
                        className="w-full h-[220px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{room.name}</h2>
                  <p className="text-gray-600">Category: {room.category?.name}</p>
                  <p className="text-gray-600">Type: {room.ac ? "AC" : "Non-AC"}</p>
                  <p className="text-sm text-gray-400">
                    Added on: {new Date(room.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default AllRooms;
