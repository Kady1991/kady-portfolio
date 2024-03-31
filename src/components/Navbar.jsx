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
    <MUI.Box sx={{ width:'full', display:'flex',}}>
      <MUI.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          md: { px: 32 },
          px: 5,
          bg: "white",
          color: "text-iconBrun",
          fontSize: "sm",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <MUI.Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <h1 className="w-40">
            <Logo />
          </h1>
        </MUI.Box>

        <MUI.Box sx={{ display: "flex", alignItems: "center", gap: 8, justifyContent:'space-between', width:'full' }}>
          <nav
            sx={{
              display: ["none", "flex"],
              flexDirection: "row",
              alignItems: "center",
              fontSize: "lg",
              fontWeight: "medium",
            }}
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

          <MUI.Box sx={{ display: ["flex", "none"], alignItems: "center" }}>
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
          top: "20px",
          fontWeight: "semibold",
          fontSize: "2xl",
          textAlign: "center",
          zIndex: 10,
          pt: 8,
          pb: 4,
          gap: 8,
          w: "full",
          h: "fit-content",
        }}
      >
        <NavLink
          to="/"
          exact
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
