import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import 'swiper/css';
import 'swiper/css/navigation';

// Array of most visited places in Mathura
const places = [
    {
        name: 'Shri Krishna Janmabhoomi',
        image: 'https://shrimathuraji.com/wp-content/uploads/2016/09/shri-krishna-janamsthan-temple-mathura.jpg',
    },
    {
        name: 'Dwarkadhish Temple',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547',
    },
    {
        name: 'Vishram Ghat',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/vishram-ghat-mathura-uttar-pradesh-1-attr-hero?qlt=82&ts=1726649207339',
    },
    {
        name: 'Govardhan Hill',
        image: 'https://www.mathuravrindavantourpackages.com/images/temple/slider/govardhan-hill-mathura-1.webp',
    },
    {
        name: 'Radha Kund',
        image: 'https://static.wixstatic.com/media/5cd086_a6bc4484587449128a655dddfc4e6580~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/5cd086_a6bc4484587449128a655dddfc4e6580~mv2.jpg',
    },
    {
        name: 'Prem Mandir, Vrindavan',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH7fD581JtNyWoFJBnZwzg29kaDShABb7jw&s',
    },
    {
        name: 'Banke Bihari Temple',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEpR1RsfaguZHwzcC6kPHAK4Jqbf2kWEGJA&s',
    },
    {
        name: 'ISKCON Vrindavan',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeNnPwG1pR4WC_Aq1ZVxeWkmJr0MzCFVJHg&s',
    },
];

const Gallery = () => {
    const navigate = useNavigate(); // ✅ Initialize navigate

    const handleOnClick = () => {
        navigate("/contact"); // ✅ This now works
    };

    return (
        <div className="w-full py-14 bg-gradient-to-b from-white to-blue-50">
            <div className="w-[95%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-MyCustomFont font-bold text-center mb-10 text-sec">
                    Most Visited Places in Mathura
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={15}
                    slidesPerView={4}
                    speed={1000}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {places.map((place, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                onClick={handleOnClick}
                                className="flex flex-col items-center bg-white rounded-lg shadow-md p-3 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="w-[300px] h-[250px] object-cover transform hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <p className="mt-3 text-center font-semibold text-lg text-gray-800">
                                    {place.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
