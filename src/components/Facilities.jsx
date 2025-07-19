import React from 'react';
import CountUp from 'react-countup';
import { Paragraph, Title } from '../ui/StyledComponent';
import { useNavigate } from 'react-router-dom';

const Facilities = () => {
    const navigate = useNavigate()
const handleonclick  = () => {
    navigate("/contact")
}

  return (
    <div className="relative w-full h-full py-44 bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 z-10 relative">
        {/* Left Content */}
        <div className="space-y-6 px-10">
          <h1 className="text-sec md:text-xl text-lg">Know Us</h1>
          <Title>Facilities at Bhagwat Bhawan</Title>
          <Paragraph>
            At Bhagwat Bhawan, we offer a harmonious blend of spiritual calm and modern comfort.
            From peaceful rooms near sacred temples to attentive service and cultural ambiance,
            every detail is crafted for a fulfilling stay in Mathura — whether you're here for darshan or rest.
          </Paragraph>
          <button onClick={handleonclick} className="bg-primary px-10 py-3 text-white rounded-md hover:bg-primary/90 transition-all">
            Reserve Your Stay
          </button>
        </div>

        {/* Right Content with Counters */}
        <div className="grid md:grid-cols-2 grid-cols-2 gap-6 text-white font-bold text-4xl px-10 z-10 mt-10 md:mt-0">
          <div className="p-6 bg-primary text-center rounded-lg">
            <CountUp end={4000} duration={3} />+
            <p className="text-3xl font-MyCustomFont text-sec mt-2">Happy Guests</p>
          </div>
          <div className="p-6 bg-primary/20 text-primary text-center rounded-lg">
            <CountUp end={250} duration={3} />+
            <p className="text-3xl font-MyCustomFont text-sec mt-2">Comfortable Rooms</p>
          </div>
          <div className="p-6 bg-primary/20 text-primary text-center rounded-lg">
            <CountUp end={99} duration={3} />%
            <p className="text-3xl font-MyCustomFont text-sec mt-2">Guest Satisfaction</p>
          </div>
          <div className="p-6 bg-primary text-center rounded-lg">
            <CountUp end={20} duration={3} />+
            <p className="text-3xl font-MyCustomFont text-sec mt-2">Years of Hospitality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
