import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Paragraph, Title } from '../ui/StyledComponent';

// Sample testimonial data with images
const testimonials = [
    {
        name: 'John Doe',
        feedback: 'This was one of the best experiences I’ve ever had. Amazing hospitality!',
        image: '/path/to/john-image.jpg', // Replace with your image path
    },
    {
        name: 'Ravi Kumar',
        feedback: 'Clean rooms, friendly staff, and great location. Highly recommended!',
        image: '/path/to/ravi-image.jpg', // Replace with your image path
    },
    {
        name: 'Sara Lee',
        feedback: 'I enjoyed every moment. Booking was smooth and customer service was excellent.',
        image: '/path/to/sara-image.jpg', // Replace with your image path
    },
    {
        name: 'Sara Lee',
        feedback: 'I enjoyed every moment. Booking was smooth and customer service was excellent.',
        image: '/path/to/sara-image.jpg', // Replace with your image path
    },
    {
        name: 'Sara Lee',
        feedback: 'I enjoyed every moment. Booking was smooth and customer service was excellent.',
        image: '/path/to/sara-image.jpg', // Replace with your image path
    },
];

const Testinomonials = () => {
    return (
        <div className="w-full py-10 bg-white">
            <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-primary">TESTIMONIAL</h1>
                <Title className=" font-bold text-primary mb-2">Happy Customer Thoughts</Title>
                <Paragraph className="md:max-w-3xl mx-auto">
                    Nunc nec magna aculis metus libero vehicula. Nullam iaculis metus vehicula. Aenean sed rutrum purus.
                </Paragraph>
            </div>

            <div className="mx-auto mt-20 px-32">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-100 rounded-lg w-full shadow-md ">
                                {/* Image with full rounded style */}

                                <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
                                <div className='  '>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                    />
                                    <h4 className="text-primary text-center  whitespace-nowrap  font-semibold">{item.name}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testinomonials;
