import React from 'react';
import CountUp from 'react-countup';
import { Paragraph, Title } from '../ui/StyledComponent';

const Facilities = () => {
    return (
        <div className="relative w-full h-full py-44 bg-white overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1 z-10 relative">
                {/* Left Content */}
                <div className="space-y-6 px-10">
                    <h1 className="text-sec md:text-xl text-lg">Know us</h1>
                    <Title>Facilities Do We Have</Title>
                    <Paragraph>
                        Vivamus bibendus, mi at suscipim erat et cm. Sed ipsum diam. Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra. Nullam iaculis ms, mi at hicula, a suscipit feliicit udin.
                    </Paragraph>
                    <button className="bg-primary px-20 py-2 text-white">Book Now</button>
                </div>

                {/* Right Content with Counters */}
                <div className="grid md:grid-cols-2 grid-cols-2 gap-6 text-white font-bold text-4xl px-10 z-10">
                    <div className="p-6 bg-primary  text-center rounded-lg">
                        <CountUp end={4000} duration={3} />+
                        <p className="text-3xl font-MyCustomFont text-sec  mt-2">Happy Customers</p>
                    </div>
                    <div className="p-6 bg-primary/20 text-primary text-center rounded-lg">
                        <CountUp end={250} duration={3} />+
                        <p className="text-3xl font-MyCustomFont text-sec  mt-2">Rooms</p>
                    </div>
                    <div className="p-6 bg-primary/20 text-primary text-center rounded-lg">
                        <CountUp className='text-primary' end={99} duration={3} />%
                        <p className="text-3xl font-MyCustomFont text-sec  mt-2">Satisfaction</p>
                    </div>
                    <div className="p-6 bg-primary text-center rounded-lg">
                        <CountUp end={20} duration={3} />+
                        <p className="text-3xl font-MyCustomFont text-sec  mt-2">Years Experience</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Facilities;
