import React from 'react';
import { Paragraph } from '../ui/StyledComponent';
import { Title } from '../ui/StyledComponent';
import herobg2 from "/prem mandir.webp";
import herobg3 from "/Group 19 - Copy.png";
import herobg4 from "/Group 19 (1) - Copy.png";
import herobg5 from "/Group 20 - Copy.png";
import BookingForm from "../ui/BookingForm"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const Hero = () => {
  const backgrounds = [ herobg2, herobg3, herobg4, herobg5 ];
  return (
    <section className="relative w-full min-h-screen md:pt-0 pt-20  text-white">
      {/* Background Swiper */}
      <div className='absolute inset-0   '>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="absolute inset-0 z-0"
        >
          {backgrounds.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bg})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute z-10 w-full h-screen  bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>

      {/* Main Content Container */}
      <div className="absolute z-999 grid  grid-cols-1  md:grid-cols-2 gap-10 items-center justify-center px-4 sm:px-8 md:px-16 py-14 md:py-28  mx-auto">
        {/* Left Text */}
        <div className="text-left md:space-y-6">
          <h1 className="text-4xl md:text-4xl font-bold font-MyCustomFont uppercase text-primary">
            Welcome to
            <br />Bhagwat Bhawan
          </h1>
          <Title className="text-start">
            A Divine Stay in the Heart of Mathura
          </Title>
          <Paragraph className="text-start font-semibold">
            Stay at Bhagwat Bhawan, Your Spiritual Home in Mathura.
            Immerse Yourself in Comfort, Culture, and Krishna's Grace.
            Explore the Land of Divine Love and Timeless Traditions.
            Experience Warmth, Peace, and Sacred Hospitality
          </Paragraph>
       <h1 className='text-red-900 text-3xl mt-10 font-bold'>"मथुरा में आपका हार्दिक स्वागत है"</h1>
        </div>

        {/* Right Side (Optional BookingForm) */}

        <div className="w-full max-w-md  md:p-6 mb-20  p-0">
          <BookingForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;
