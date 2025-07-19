import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paragraph, Title } from '../ui/StyledComponent';
import Categorycard from './Categorycard';

// Map of category names to their hardcoded images
const imageMap = {
  "Single room": "https://vuniversity.in/wp-content/uploads/2023/10/Types-of-room-single.png",
  "Double Room": "https://media.istockphoto.com/id/1315468007/photo/luxury-hotel-bedroom.jpg",
  "Triple Room": "https://media.istockphoto.com/id/1340676713/photo/modern-bedroom.jpg",
};

const Categorydetailcard = ({ show }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://api.bhagwatbhawan.in/api/v1/category/all", {withCredentials: true});
        const categoriesWithImages = res?.data.map((cat) => ({
          ...cat,
          image: imageMap[cat.name] || "",
        }));
        setCategories(categoriesWithImages);
        setSelected(categoriesWithImages[0]);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    };
    fetchCategories();
  }, []);

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
            setSelected(categories.find((opt) => opt.name === e.target.value))
          }
          className="w-full p-3 rounded-lg border border-primary text-primary font-semibold"
        >
          {categories.map((room) => (
            <option key={room._id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {categories.map((room) => (
          <div
            key={room._id}
            onClick={() => setSelected(room)}
            className="cursor-pointer flex items-center group gap-5"
          >
            <h1
              className={`${selected?._id === room._id
                ? 'text-primary font-bold'
                : 'text-primary/30 group-hover:text-primary'
                } font-MyCustomFont md:whitespace-nowrap`}
              style={{ fontSize: "clamp(1rem, 3vw , 2.2rem)" }}
            >
              {room.name}
            </h1>

            <div className="relative">
              <img
                className="w-[20vw] h-[10vh] rounded-full object-cover"
                src={room.image}
                alt={room.name}
              />
              <div className="absolute inset-0 rounded-full border-[7px] border-white opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-1000"></div>
            </div>
          </div>
        ))}
      </div>

      {selected && <Categorycard categoryId={selected._id} />}

    </section>
  );
};

export default Categorydetailcard;
