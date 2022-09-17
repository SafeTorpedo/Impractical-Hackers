import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df8c] ">
                Insert Project Name
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">Creators</li>
                <li className="p-4">Github Repo</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={25} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800 bg-[#000031] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-[#00df8c] m-8">
                    Insert Project Name
                </h1>
                <ul className="pt-12 uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Creators</li>
                    <li className="p-4">Github Repo</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
