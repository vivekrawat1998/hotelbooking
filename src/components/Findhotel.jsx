import React from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import { FaBullseye, FaEye, FaAward, FaCheckCircle, FaUsers } from 'react-icons/fa';

const Findhotel = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-10 md:px-20 py-12 gap-10'>
      {/* LEFT IMAGES */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
        <img
          className='w-full object-cover rounded-xl'
          src='/Website Design (91).png'
          alt='Hotel Room 1'
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h1 className='text-primary font-MyCustomFont text-xl mb-2'>COME. STAY. ENJOY</h1>
        <Title>Find The Best Hotel</Title>
        <Paragraph>
          Nestled in the divine land of Mathura, Bhagwat Bhawan offers unmatched comfort with spiritual serenity. Experience elegant rooms, warm hospitality, and close proximity to sacred sites.
        </Paragraph>

        {/* Highlights Section with Icons */}
        <div className='mt-10'>
          <h1 className='md:text-2xl text-xl font-semibold'>Highlights</h1>
          <div className='grid grid-cols-3 gap-6 mt-6 text-center'>
            {/* Best Hospitality Award */}
            <div className='flex flex-col items-center gap-3 text-primary'>
              <FaAward className='text-5xl mx-auto' />
              <p className='font-semibold'>Best Hospitality Award</p>
            </div>

            {/* Tourist Permission */}
            <div className='flex flex-col items-center gap-3 text-primary'>
              <FaCheckCircle className='text-5xl mx-auto' />
              <p className='font-semibold'>Tourist Permission</p>
            </div>

            {/* 1500+ tourists visited */}
            <div className='flex flex-col items-center gap-3 text-primary'>
              <FaUsers className='text-5xl mx-auto' />
              <p className='font-semibold'>1500+ Tourists Visited</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className='mt-10 flex flex-col md:flex-row items-start md:gap-10 gap-8'>
            {/* Mission */}
            <div className='flex items-start gap-4'>
              <FaBullseye className='text-primary text-4xl sm:text-5xl' />
              <div>
                <h1 className='text-lg font-semibold'>Our Mission</h1>
                <p>
                  To provide a peaceful and divine lodging experience enriched by Mathura's cultural and spiritual essence.
                </p>
              </div>
            </div>

            {/* Optional separator for large screens */}
            <div className='hidden md:block border border-primary h-[10vh]' />

            {/* Vision */}
            <div className='flex items-start gap-4'>
              <FaEye className='text-primary text-4xl sm:text-5xl' />
              <div>
                <h1 className='text-lg font-semibold'>Our Vision</h1>
                <p>
                  To be Mathura’s most welcoming spiritual sanctuary for pilgrims and travelers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findhotel;
