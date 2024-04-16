import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as MUI from "@mui/material";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <MUI.Box sx={{ width: '100%', display: 'flex' , justifyContent:"center"}}>
      <MUI.Box
        sx={{
          width: '100%',
          display: "flex",
          justifyContent: "space-between",
          bg: "white",
          color: "text-iconBrun",
          fontSize: "sm",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <MUI.Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer", ml: 5 }}
        >
          <h1 className="w-40">
            <Logo />
          </h1>
        </MUI.Box>

        <MUI.Box sx={{ display: "flex", alignItems: "center", gap: 8, justifyContent: 'flex-end', flex: 1 }}>
          <nav
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "lg",
              fontWeight: "medium",
              pr: 5,
            }}
            className="menu"
          >
            <NavLink
              to="/"
              exact={true.toString()}
              className="hover:text-hoverNavbar transition-all cursor-pointer"
              activeClassName="text-hoverNavbar"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/apropos"
              className="hover:text-hoverNavbar transition-all cursor-pointer"
              activeClassName="text-hoverNavbar"
              onClick={closeMenu}
            >
              About me
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-hoverNavbar transition-all cursor-pointer"
              activeClassName="text-hoverNavbar"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/education"
              className="hover:text-hoverNavbar transition-all cursor-pointer"
              activeClassName="text-hoverNavbar"
              onClick={closeMenu}
            >
              Education
            </NavLink>
            <NavLink
              to="/portfolio"
              className="hover:text-hoverNavbar transition-all cursor-pointer"
              activeClassName="text-hoverNavbar"
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
            {/* Ajoutez les autres liens ici */}
          </nav>

          <MUI.Box sx={{ display: ["flex", "none"], alignItems: "center", mr: 5 }}>
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
            )}
          </MUI.Box>
        </MUI.Box>
      </MUI.Box>

      {/* Mobile Menu */}
      <MUI.Box
        sx={{
          transform: menu ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s",
          display: ["block", "none"],
          position: "absolute",
          bg: "black",
          color: "white",
          left: 0,
          top: "64px",
          fontWeight: "semibold",
          fontSize: "2xl",
          textAlign: "center",
          zIndex: 10,
          pt: 8,
          pb: 4,
          gap: 8,
          w: "100%",
        }}
      >
        <NavLink
          to="/"
          exact={true.toString()} // ou exact="true"
          className="hover:text-hoverNavbar transition-all cursor-pointer"
          activeClassName="text-hoverNavbar"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/apropos"
          className="hover:text-hoverNavbar transition-all cursor-pointer"
          activeClassName="text-hoverNavbar"
          onClick={closeMenu}
        >
          About me
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-hoverNavbar transition-all cursor-pointer"
          activeClassName="text-hoverNavbar"
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/education"
          className="hover:text-hoverNavbar transition-all cursor-pointer"
          activeClassName="text-hoverNavbar"
          onClick={closeMenu}
        >
          Education
        </NavLink>
        <NavLink
          to="/portfolio"
          className="hover:text-hoverNavbar transition-all cursor-pointer"
          activeClassName="text-hoverNavbar"
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>
          
      </MUI.Box>
    </MUI.Box>
  );
};

export default Navbar;
