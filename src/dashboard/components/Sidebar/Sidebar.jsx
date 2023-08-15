import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { sideMenu } from "./SideMenu";
import { Outlet, NavLink } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log("I am clickable");
  };

  return (
    <>
      <aside
        className={`${"user-sidebar"} ${
          open ? "user-sidebar-test" : "user-sidebar-mobile"
        } `}
      >
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          <span
            className={`${"side-handle"} ${
              open ? "close-side-handle" : "open-side-handle"
            }`}
            onClick={handleClick}
          >
            <AiOutlineDoubleLeft />
          </span>
          <div className="sidebar-menu">
            {sideMenu.map((menu, index) => {
              // const isActive = menu.path

              return (
                <NavLink
                  to={menu.path}
                  key={index}
                  className={({ isActive }) => (isActive ? "bg-change" : "")}
                >
                  <span>{menu.icon}</span>
                  <p className={open ? "" : "sidebar-menu-open"}>
                    {menu.title}
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default Sidebar;
