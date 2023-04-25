import React, { useState } from "react";
import "./Sidebar.scss";
import MenuIMG from "../../assets/menu_bg.jpeg";
import { BiFoodMenu } from "react-icons/bi";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Sidebar = () => {
  //
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //
  const toggleDrawer = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className={`menu-btn ${isSidebarOpen ? "slide" : ""}`}
      >
        <BiFoodMenu /> Menu
      </button>

      <Drawer
        open={isSidebarOpen}
        onClose={toggleDrawer}
        direction="right"
        className="sidebar"
      >
        <img src={MenuIMG} alt="menu_bg" className="background" />
        <div className="container">
          <div className="sidebar-heading">
            <h1 className="title">
              <a href="#menu">Menu</a>
            </h1>
          </div>

          <ul className="menu-items">
            <li className="menu-item">
              <a href="#starters">Starters</a>
            </li>
            <li className="menu-item">
              <a href="#sandwiches">Sandwiches</a>
            </li>
            <li className="menu-item">
              <a href="#soups">Soups</a>
            </li>
            <li className="menu-item">
              <a href="#burgers">Burgers</a>
            </li>
            <li className="menu-item">
              <a href="#salads">Salads</a>
            </li>
          </ul>

          <div className="sidebar-footer">
            Created by Eljan
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
