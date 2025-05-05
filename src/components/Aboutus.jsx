import React from 'react';
import { Title } from '../ui/StyledComponent';
import { FaUtensils, FaSwimmer, FaBed, FaChild } from 'react-icons/fa';

const amenities = [
    {
        icon: <FaUtensils className="text-primary text-3xl" />,
        title: 'Delicious Foods',
        desc: 'Nisi quis eleifend quam adipiscing vitae proin sagittis.'
    },
    {
        icon: <FaSwimmer className="text-primary text-3xl" />,
        title: 'Swimming Pool',
        desc: 'Amet luctus venenatis lectus magna fringilla porttitor.'
    },
    {
        icon: <FaBed className="text-primary text-3xl" />,
        title: 'Fine Double Beds',
        desc: 'Egestas quis ipsum suspendisse ultrices gravida dictum.'
    },
    {
        icon: <FaChild className="text-primary text-3xl" />,
        title: "Kid's Playing Park",
        desc: 'Mi in nulla posuere sollicitudin aliquam ultrices sagitt.'
    }
];

const Aboutus = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center px-4 md:px-20 py-20 bg-[#f8f5f0]'>
            {/* Left Text */}
            <div>
                <h1 className="text-lg font-semibold uppercase text-primary mb-2">Best Amenities</h1>
                <Title>
                    Enjoy Your Vacation In Our Hotel And Get Lots Of Fun, Happiness And Great Pleasure
                </Title>
            </div>

            {/* Right Amenities Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {amenities.map((item, idx) => (
                    <div key={idx} className='flex items-start gap-4'>
                        <div className="bg-white shadow-md p-3 rounded-full">
                            {item.icon}
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-gray-800'>{item.title}</h2>
                            <p className='text-gray-600 text-sm'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aboutus;
