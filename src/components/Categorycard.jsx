import React, { useRef } from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import { FaWifi, FaTv, FaUtensils, FaSwimmer, FaSpa } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const amenities = [
    { icon: <FaWifi className="text-xl text-primary" />, label: 'Free Wi-Fi' },
    { icon: <FaTv className="text-xl text-primary" />, label: 'LED TV' },
    { icon: <FaUtensils className="text-xl text-primary" />, label: 'Room Service' },
    { icon: <FaSwimmer className="text-xl text-primary" />, label: 'Swimming Pool' },
    { icon: <FaSpa className="text-xl text-primary" />, label: 'Spa & Wellness' },
];

const images = [
    "https://thumbs.dreamstime.com/b/luxurious-five-star-hotel-suite-d-background-room-floor-to-ceiling-windows-overlooking-city-skyline-elegant-marble-floors-368960513.jpg",
    "https://media.istockphoto.com/id/1315468007/photo/luxury-hotel-bedroom.jpg",
    "https://media.istockphoto.com/id/1340676713/photo/modern-bedroom.jpg"
];

const Categorycard = () => {
    const swiperRef = useRef(null);

    return (
        <div className="w-full relative grid grid-cols-1 md:grid-cols-2 mb-20 overflow-hidden rounded-xl mt-20 items-center">
            {/* Image on top for small screens, right side on large */}
            <div className="order-1 md:order-2 relative w-full h-full flex justify-center items-center">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-full rounded-xl"
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`Luxury Room ${idx + 1}`}
                                className="w-full h-[300px] md:h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                    {images.map((_, idx) => (
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
                <Title className="text-white">Luxury Room</Title>
                <Paragraph className="mb-6 text-white">
                    Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra. Nullam iaculis.
                </Paragraph>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex items-center text-white gap-3">
                            <div className="bg-[#EDE8E4] p-2 rounded-full">{item.icon}</div>
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categorycard;
