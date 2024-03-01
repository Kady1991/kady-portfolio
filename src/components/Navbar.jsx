import React, { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import img from "../assets/img/loGr.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-1 md:px-32 px-5 bg-white text-boutonBase text-sm text-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <div className="flex flex-row items-center cursor-pointer">
            <h1 className="w-20">
              <img src={img} alt="logo" />
            </h1>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink
              to="/"
              exact
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              Home
            </NavLink>
            <NavLink
              to="/apropos"
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              About me
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              Services
            </NavLink>
            <NavLink
              to="/education"
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              Experience
            </NavLink>
            <NavLink
              to="/portfolio"
              className="hover:text-brightColor transition-all cursor-pointer"
              activeClassName="text-brightColor"
            >
              Portfolio
            </NavLink>
          </nav>

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <NavLink
            to="/"
            exact
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/apropos"
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            About me
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/education"
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            Education
          </NavLink>
          <NavLink
            to="/experience"
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            Experience
          </NavLink>
          <NavLink
            to="/portfolio"
            className="hover:text-brightColor transition-all cursor-pointer"
            activeClassName="text-brightColor"
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
