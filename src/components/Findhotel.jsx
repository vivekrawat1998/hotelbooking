import React from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import { FaBullseye, FaEye } from 'react-icons/fa';

const Findhotel = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-10 md:px-20 py-12 gap-10'>
      {/* LEFT IMAGES */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
        <img
          className='w-full object-cover rounded-xl'
          src='/triplex room.jfif'
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

        {/* Awards */}
        <div className='mt-10'>
          <h1 className='md:text-2xl text-xl font-semibold'>Best Hospitality Awards</h1>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6'>
            {[
              'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-4.png',
              'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-3.png',
              'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-2.png',
              'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-5.png',
            ].map((src, index) => (
              <img
                key={index}
                className='w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto'
                src={src}
                alt={`Award ${index + 1}`}
              />
            ))}
          </div>

          {/* Mission & Vision */}
          <div className='mt-10 flex flex-col md:flex-row items-start md:gap-10 gap-8'>
            {/* Mission */}
            <div className='flex items-start gap-4'>
              <FaBullseye className='text-primary text-4xl sm:text-5xl' />
              <div>
                <h1 className='text-lg font-semibold'>Our Mission</h1>
                <p>To provide a peaceful and divine lodging experience enriched by Mathura's cultural and spiritual essence.</p>
              </div>
            </div>

            {/* Optional separator for large screens */}
            <div className="hidden md:block border border-primary h-[10vh]" />

            {/* Vision */}
            <div className='flex items-start gap-4'>
              <FaEye className='text-primary text-4xl sm:text-5xl' />
              <div>
                <h1 className='text-lg font-semibold'>Our Vision</h1>
                <p>To be Mathura’s most welcoming spiritual sanctuary for pilgrims and travelers alike.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findhotel;
