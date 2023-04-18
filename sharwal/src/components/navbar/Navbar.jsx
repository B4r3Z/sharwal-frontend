import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import UK from "../../assets/UnitedKingdom.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import react from "../../assets/react.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <nav className="flex justify-between items-center px-6 bg-transparent sticky top-0 border-box ">
      <Link to="/">
        <img src={react} alt="under construction" />
      </Link>

      <div className="m-6 p-1.5 bg-myYellow ">
        <div className=" w-[400px] h-[60px] border-[3px] border-myGreen flex items-center px-4 justify-between">
          <div className="relative inline-block text-left" ref={menuRef}>
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
                <ul
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link to="/categories">
                    <li
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Categories
                    </li>
                  </Link>
                  <Link to="/products">
                    <li
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Products
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Contact US
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <span className="h-[36px] w-[2px] bg-myGreen"></span>
          <div className="flex items-center">
            <IoSearchOutline size={30} color="#3B8457" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent py-2 text-myGreen outline-none text-lg ml-2 font-satoshiMid placeholder:text-myGreen/60 "
            />
          </div>
          <span className="h-[36px] w-[2px] bg-myGreen"></span>
          <IoCartOutline size={30} color="#3B8457" />
        </div>
      </div>
      <img
        src={UK}
        alt="under construction"
        className="border-[3px] border-myYellow "
      />
    </nav>
  );
};
