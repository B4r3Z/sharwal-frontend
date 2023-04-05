import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import UK from "../../../public/assets/UnitedKingdom.svg";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav class="flex justify-between items-center px-24 w-screen bg-transparent sticky top-0">
      <img src=";;;" alt="under construction" />
      <div class="m-6 p-1.5 bg-myYellow ">
        <div className=" w-[400px] h-[60px] border-[3px] border-myGreen flex items-center px-4 justify-between">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full px-2 py-[6px] text-sm font-medium  hover:bg-[#EDB138] focus:outline-none"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="hover:cursor-pointer">
                  <SlMenu size={30} color="#3B8457" />
                </div>
              </button>
            </div>
            {isOpen && (
              <div className="origin-top-left absolute left-0 mt-2 w-56 bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
          <span class="h-[36px] w-[2px] bg-myGreen"></span>
          <div className="flex items-center">
            <IoSearchOutline size={30} color="#3B8457" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent py-2 text-myGreen outline-none text-lg ml-2 font-satoshiMid placeholder:text-myGreen/60 "
            />
          </div>
          <span class="h-[36px] w-[2px] bg-myGreen"></span>
          <IoCartOutline size={30} color="#3B8457" />
        </div>
      </div>
      <img src={UK} alt="under construction" />
    </nav>
  );
};
