import React from 'react'

const Profile = ({ title, height = "full" }) => {
    return (
        <div className={`bg-[#072724] w-full font-MyCustomFont  ${height} overflow-hidden p-5 relative md:px-48
        `}>
            {/* Overlay */}
            <div className="absolute inset-0 grid place-items-center w-full h-full">
                <img
                    src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className='relative  py-20 text-white flex  items-center justify-center text-center'>
                <div className="max-w-4xl">
                    <div className="max-w-4xl space-y-3">
                        <h1 className="md:text-6xl text-sm text-[#D89D55] font-bold">{title}</h1>
                        <h2 className='md:text-3xl text-xl'>Home / <strong>{title} </strong></h2>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Profile