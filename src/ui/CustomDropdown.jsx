import React, { useState } from 'react';

const CustomDropdown = ({ label, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex  border gap-5  rounded py-3 border-primary w-full mb-4">
            <label className="block text-center  text-gray-600 pl-2 mb-1 font-medium">{label}</label>
            <div
                className=" w-full rounded-lg text-start px-4 py-2 text-sec bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected} {label === "Adults" ? (selected > 1 ? "Adults" : "Adult") : (selected > 1 ? "Children" : "Child")}
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-10 w-[86%] right-0 px-4 bg-white border border-primary rounded-lg shadow-md">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                            className=" hover:bg-primary hover:text-white text-sec cursor-pointer transition-all"
                        >
                            {option} {label === "Adults" ? (option > 1 ? "Adults" : "Adult") : (option > 1 ? "Children" : "Child")}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CustomDropdown;