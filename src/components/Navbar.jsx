import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import SocialIcons from "../layouts/FloatingIcons";

const { Header } = Layout;

const Navbar = ({ menu, closeMenu, handleChange }) => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "350px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        color: "#fff",
        textAlign: "center",
        background: "#170D06",
      }}
    >
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <Logo />
      </div>

      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#170D06",
        }}
      >
        {[
          { key: "1", to: "/", label: "Home" },
          { key: "2", to: "/apropos", label: "A propos" },
          { key: "3", to: "/services", label: "Services" },
          { key: "4", to: "/education", label: "Education" },
          { key: "5", to: "/portfolio", label: "Portfolio" },
        ].map((item) => (
          <Menu.Item
  key={item.key}
  style={{
    fontSize: "20px",
    transition: "all 0.3s ease-in-out",
    borderRadius: "10px",
    width: "100%", // ✅ Prend toute la largeur du menu
    textAlign: "center",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // ✅ Centre verticalement le texte
  }}
>
  <NavLink
    to={item.to}
    className={({ isActive }) => (isActive ? "active-link" : "")}
    style={({ isActive }) => ({
      color: isActive ? "#fff" : "#fff",
      background: isActive ? "#9f7a56" : "transparent",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      padding: "15px 30px",
      display: "flex",
      alignItems: "center", // ✅ Centre le texte verticalement
      justifyContent: "center", // ✅ Centre le texte horizontalement
      width: "100%", // ✅ Assure que le texte couvre tout l'espace
      borderRadius: "20px",
      transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
      margin: "5px 0",
      textAlign: "center", // ✅ Assure le centrage du texte
      
    })}
    onClick={closeMenu}
  >
    {item.label}
  </NavLink>
</Menu.Item>

        ))}
      </Menu>

      <div className="icons">
        <SocialIcons />
      </div>

      <div className="menu-toggle" style={{ paddingBottom: "15px" }}>
        {menu ? (
          <CloseOutlined style={{ fontSize: "20px", color: "#fff" }} onClick={handleChange} />
        ) : (
          <MenuOutlined style={{ fontSize: "20px", color: "#fff" }} onClick={handleChange} />
        )}
      </div>
    </Header>
  );
};

// ✅ Ajout de la validation des props
Navbar.propTypes = {
  menu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Navbar;
