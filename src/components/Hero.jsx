import React from 'react';
import { Paragraph } from '../ui/StyledComponent';
import { Title } from '../ui/StyledComponent';
import herobg from '/prem mandir.webp';
import BookingForm from "../ui/BookingForm"
const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${herobg})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 grid grid-cols-1  md:grid-cols-2 gap-10 items-center justify-center px-4 sm:px-8 md:px-16 py-14 md:py-28  mx-auto">
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
            Experience unmatched comfort and spiritual serenity at Bhagwat Bhawan — nestled near the sacred temples of Mathura and Vrindavan.
            Whether you're here for darshan, rest, or celebration, we offer a tranquil and divine environment just steps from Krishna Janmabhoomi and Prem Mandir.
          </Paragraph>
        </div>

        {/* Right Side (Optional BookingForm) */}

        <div className="w-full max-w-md  md:p-6 ">
          <BookingForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;
