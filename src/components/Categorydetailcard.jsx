import React, { useState } from 'react';
import { Paragraph, Title } from '../ui/StyledComponent';
import Categorycard from './Categorycard';

const roomOptions = [
  {
    label: "Single Room",
    image:
      "https://thumbs.dreamstime.com/b/luxurious-five-star-hotel-suite-d-background-room-floor-to-ceiling-windows-overlooking-city-skyline-elegant-marble-floors-368960513.jpg",
  },
  {
    label: "Double Room",
    image:
      "https://media.istockphoto.com/id/1315468007/photo/luxury-hotel-bedroom.jpg",
  },
  {
    label: "Deluxe Room",
    image:
      "https://media.istockphoto.com/id/1340676713/photo/modern-bedroom.jpg",
  },
];

const Categorydetailcard = () => {
  const [selected, setSelected] = useState(roomOptions[0]);

  return (
    <section className="w-full md:p-20 px-3">
      <div className="grid place-items-center w-full">
        <h1 className="text-4xl md:text-xl uppercase text-start text-primary font-bold mb-4">
          DIVINE-ELITE
        </h1>
        <Title className="text-start">Choose Your Room</Title>
        <Paragraph className="max-w-3xl text-center">
          Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at lpsum porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
        </Paragraph>
      </div>

      {/* Mobile Dropdown */}
      <div className="block md:hidden mt-10">
        <select
          onChange={(e) =>
            setSelected(roomOptions.find((opt) => opt.label === e.target.value))
          }
          className="w-full p-3 rounded-lg border border-primary text-primary font-semibold"
        >
          {roomOptions.map((room, idx) => (
            <option key={idx} value={room.label}>
              {room.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {roomOptions.map((room, idx) => (
          <div key={idx} className="flex items-center group gap-5">
            <h1
              className="text-primary/30 group-hover:text-primary font-MyCustomFont md:whitespace-nowrap"
              style={{ fontSize: "clamp(1rem, 3vw , 2.2rem)" }}
            >
              {room.label}
            </h1>

            <div className="relative">
              <img
                className="w-[20vw] h-[10vh] rounded-full object-cover"
                src={room.image}
                alt={room.label}
              />
              <div className="absolute inset-0 rounded-full border-[7px] border-white opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-1000"></div>
            </div>
          </div>
        ))}
      </div>

      <Categorycard />
    </section>
  );
};

export default Categorydetailcard;
