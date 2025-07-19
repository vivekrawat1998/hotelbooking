import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Paragraph, Title } from '../ui/StyledComponent';

const Forroomdetails = ({ roomDetails }) => {
    if (!roomDetails) {
        return <p className="text-center py-10">Loading room details...</p>;
    }

    return (
        <section className="p-5 md:p-10">
            <div className="mt-10 p-5 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Room Details</h2>

                <h3 className="text-xl font-bold uppercase">{roomDetails.name}</h3>
                <Paragraph className="mt-2">{roomDetails.description}</Paragraph>

                <div className="mt-4">
                    <h4 className="font-semibold">Price: ₹{roomDetails.price} / night</h4>
                </div>
                {/* Images Slider */}
                <div className="mt-6">
                    <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="rounded-xl overflow-hidden w-full">
                        {roomDetails.images?.map((img) => (
                            <SwiperSlide key={img._id}>
                                <img src={img.url} alt="room" className="w-full object-cover h-[400px]" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <button className="mt-6 bg-primary text-white py-3 px-8 rounded-md">
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default Forroomdetails;
