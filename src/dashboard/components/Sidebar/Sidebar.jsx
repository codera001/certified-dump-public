import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { sideMenu } from "./SideMenu";
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="user-sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar-menu">
            {sideMenu.map((menu, index) => {
              return (
                <Link to={menu.path} key={index}>
                  <span>{menu.icon}</span>
                  <span>{menu.title}</span>
                </Link>
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
