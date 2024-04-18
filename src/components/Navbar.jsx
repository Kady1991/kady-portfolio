import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "../index.css"; // Importez le fichier CSS correctement
import Logo from "./Logo";
import SocialIcons from "../layouts/SocialIcons";

const { Header } = Layout;

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(prevMenu => !prevMenu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "350px", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", color: "#fff", textAlign: "center", background: "#170D06" }}>
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <Logo />
      </div>

      <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]} style={{ width: "100%", height: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", background: "#170D06" }}>
        <Menu.Item key="1" style={{ fontSize: "25px" }}>
          <NavLink exact to="/" style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }} onClick={closeMenu} activeStyle={{ color: "#7E5835" }}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" style={{ fontSize: "25px" }}>
          <NavLink to="/apropos" style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }} onClick={closeMenu} activeStyle={{ color: "#7E5835" }}>
            About me
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" style={{ fontSize: "25px" }}>
          <NavLink to="/services" style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }} onClick={closeMenu} activeStyle={{ color: "#FCDFAE" }}>
            Services
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4" style={{ fontSize: "25px" }}>
          <NavLink to="/education" style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }} onClick={closeMenu} activeStyle={{ color: "#FCDFAE" }}>
            Education
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5" style={{ fontSize: "25px" }}>
          <NavLink to="/portfolio" style={{ color: "#fff", textDecoration: "none", fontSize: "25px" }} onClick={closeMenu} activeStyle={{ color: "#FCDFAE" }}>
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

export default Navbar;
