import React from 'react';
import Marquee from 'react-fast-marquee';

const Videocontent = () => {
    return (
        <div className="relative w-full mt-44 h-[90vh]">
            {/* 🔹 Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://res.cloudinary.com/dhn81m80y/video/upload/v1753264995/m1_lajunc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🔹 Foreground Content */}
            <div className="relative  -top-10 left-0 p-10 px-52 z-20 w-full h-[100vh] overflow-hidden flex ">

                {/* 🔹 Marquee Text (Vertical using rotate) */}
                <div className="absolute left-0 top-0 h-full w-52  bg-black/40 z-30 overflow-hidden flex items-center justify-center">
                    <div className="transform rotate-90 origin-center">
                        <Marquee
                            gradient={false}
                            speed={2}
                            autoFill={true}
                            direction="left"
                            className="text-white text-[6rem] font-bold tracking-tighter whitespace-nowrap"
                        >
                            {Array.from({ length: 10 }).map((_, i) => (
                                <span key={i} className="mx-10">BOOK NOW</span>
                            ))}
                        </Marquee>
                    </div>
                </div>
                {/* 🔹 Summer Offer Content */}
                {/* <div className="bg-[#3D3832]/30 bg-opacity-20  text-white p-10 h-full rounded-r-full max-w-3xl z-40">
                    <h1 className="text-5xl font-bold text-primary uppercase mb-4">Summer Offer</h1>
                    <h2 className="md:text-9xl text-white text-2xl mb-4">Starts From <br /> 1000rs </h2>
                    <p className="text-xl">
                        Enjoy luxurious stays this summer with our special offers. Relax, unwind, and make unforgettable memories.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Videocontent;
