import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const links = ["Home", "Profile", "Setting"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="bg-[#1F1C3F] sm:px-10 py-4 px-7 sm:flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/Home"
            className="flex text-2xl cursor-pointer items-center gap-2"
          >
            <BeakerIcon className="w-7 h-7 text-[#B5E6DB]" />
            <span className="font-bold text-white">EcomSport</span>
          </Link>

          {/* Menu */}
          <div className="flex pl-9 md:pl-0 font-semibold text-white">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-7 h-7 absolute right-8 top-6 cursor-pointer sm:hidden"
            >
              {isOpen ? <XMarkIcon /> : <Bars3Icon />}
            </div>

            <ul
              className={`sm:flex pl-9 sm:pl-0 sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-auto z-[-1] left-0 w-full transition-all bg-[#1F1C3F] duration-500 ease-in 
                ${isOpen ? "top-12" : "top-[-490px]"}`}
            >
              <li>
                <input
                  className="w-80 h-10 border rounded-md mr-20 text-center"
                  type="text"
                  placeholder="Buscar"
                />
              </li>

              {links.map((link, index) => (
                <li
                  key={index}
                  className={`my-7 sm:my-0 ${index !== 0 ? "sm:ml-8" : ""}`}
                >
                  {link}
                </li>
              ))}

              <Link to="/Login">
                <button className="bg-[#B5E6DB] text-black py-1 px-8 rounded-md sm:ml-8 sm:static">
                  Sign In
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
