import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { sideMenu } from "./SideMenu";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";


const Sidebar = () => {
  return (
    <>
      <aside className="user-sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          <span className="">
            <AiOutlineDoubleLeft />
          </span>
          <div className="sidebar-menu">
            {sideMenu.map((menu, index) => {
              return (
                <Link to={menu.path} key={index}>
                  <span>{menu.icon}</span>
                  <p>{menu.title}</p>
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
