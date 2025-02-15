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
        <Menu.Item key="1" style={{ fontSize: "25px" }}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" style={{ fontSize: "25px" }}>
          <NavLink
            to="/apropos"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }}
            onClick={closeMenu}
          >
            About me
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" style={{ fontSize: "25px" }}>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }}
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" style={{ fontSize: "25px" }}>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }}
            onClick={closeMenu}
          >
            Education
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5" style={{ fontSize: "25px" }}>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }}
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
        </Menu.Item>
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
