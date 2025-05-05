import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Sample image array
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s',
    'https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
    'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A2tDJFnXOjaAm_qL2MYmHOZEjMn7Pn7ksQ&s',
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?cs=srgb&dl=pexels-pixabay-271618.jpg&fm=jpg',
    'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg',
    'https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg?semt=ais_hybrid&w=740',
    'https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743751085-N2317B7K3I2YBZHPHENO/image-asset.jpeg',
    'https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg',
];

const Gallery = () => {
    return (
        <div className="w-full py-10   bg-white">
            <div className="w-[95%] mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={4}
                    speed={1000}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`gallery-${idx}`}
                                className="w-[500px] h-[400px] object-cover rounded-md shadow-sm mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
