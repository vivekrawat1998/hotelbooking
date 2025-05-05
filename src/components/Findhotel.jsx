import React from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import { FaBullseye, FaEye } from 'react-icons/fa';

const Findhotel = () => {
    return (
        <div className='w-full grid px-20 md:gap-25 grid-cols-1 md:grid-cols-2 items-center'>
            {/* LEFT IMAGES */}
            <div className='flex items-center gap-10 justify-center'>
                <img
                    className='w-[370px] rounded-xl h-[80vh] object-cover'
                    src='https://thumbs.dreamstime.com/b/luxurious-five-star-hotel-suite-d-background-room-floor-to-ceiling-windows-overlooking-city-skyline-elegant-marble-floors-368960513.jpg'
                    alt='Hotel Image 1'
                />
                <img
                    className='w-[370px] rounded-xl h-[80vh] object-cover'
                    src='https://thumbs.dreamstime.com/b/luxurious-five-star-hotel-suite-d-background-room-floor-to-ceiling-windows-overlooking-city-skyline-elegant-marble-floors-368960513.jpg'
                    alt='Hotel Image 2'
                />
            </div>

            {/* RIGHT CONTENT */}
            <div>
                <h1 className='text-primary font-MyCustomFont text-xl'>COME. STAY. ENJOY</h1>
                <Title>Find The Best Hotel</Title>
                <Paragraph>
                    Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam iaculis metus nehicula. Aenean sed rutrum purus.
                </Paragraph>

                {/* Awards */}
                <div className='mt-10'>
                    <h1 className='md:text-2xl text-xl'>Best Hospitality Awards</h1>
                    <div className='flex flex-wrap gap-6 mt-6'>
                        {[
                            'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-4.png',
                            'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-3.png',
                            'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-2.png',
                            'https://herittage.wpengine.com/wp-content/uploads/2023/05/awards-image-5.png',
                        ].map((src, index) => (
                            <img key={index} className='w-20 h-20 object-cover' src={src} alt={`Award ${index + 1}`} />
                        ))}
                    </div>

                    {/* Mission & Vision */}
                    <div className='mt-10 flex  md:gap-10'>
                        {/* Mission */}
                        <div className='flex items-start gap-4'>
                            <FaBullseye className='text-primary text-5xl ' />
                            <div>
                                <h1 className='text-lg font-semibold'>Our Mission</h1>
                                <p>Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivam.</p>
                            </div>
                        </div>

                        {/* Line Separator */}
                        <div className="border border-primary h-[10vh]" />

                        {/* Vision */}
                        <div className='flex items-start gap-4'>
                            <FaEye className='text-primary text-5xl ' />
                            <div>
                                <h1 className='text-lg font-semibold'>Our Vision</h1>
                                <p>Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Findhotel;
