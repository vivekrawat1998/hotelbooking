import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Paragraph, Title } from '../ui/StyledComponent';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get('https://api.bhagwatbhawan.in/api/v1/testimonials/all');
                setTestimonials(res.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load testimonials');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <div className="w-full py-16 bg-white">
            <div className="text-center mb-10">
                <h1 className="text-lg font-semibold text-primary tracking-wider">TESTIMONIAL</h1>
                <Title className="text-3xl md:text-4xl font-bold text-primary mb-3">What Our Customers Say</Title>
                <Paragraph className="text-gray-600 md:max-w-3xl mx-auto">
                    Hear it from the people whose lives we've touched.
                </Paragraph>
            </div>

            <div className="mx-auto px-4 md:px-16">
                {loading && <p className="text-center text-gray-600">Loading testimonials...</p>}
                {error && <p className="text-center text-red-600">{error}</p>}

                {!loading && !error && (
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item._id}>
                                <div className="bg-gray-100 hover:bg-primary/10 duration-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                                    <img
                                        src={item.images?.[0]?.url || '/default-user.png'}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-full border-4 border-primary mb-4"
                                    />
                                    <p className="text-gray-800 italic text-sm mb-4 max-w-xs">"{item.comment}"</p>
                                    <h4 className="text-primary font-semibold text-lg capitalize">{item.name}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
