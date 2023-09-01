import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { sideMenu } from "./SideMenu";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const signOut = async () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <aside
        className={`${"d-user-sidebar"} ${
          open ? "d-user-sidebar-test" : "d-user-sidebar-mobile"
        } `}
      >
        <div className="d-sidebar-inner">
          <div className="d-sidebar-logo">
            <img src={logo} alt="logo" />
          </div>
          <span
            className={`${"d-side-handle"} ${
              open ? "d-close-side-handle" : "d-open-side-handle"
            }`}
            onClick={handleClick}
          >
            <AiOutlineDoubleLeft />
          </span>
          <div className="d-sidebar-menu">
            {sideMenu.map((menu, index) => {
              return (
                <NavLink
                  onClick={() => (menu.title === "Log out" ? signOut() : "")}
                  title={menu.title}
                  to={menu.path}
                  key={index}
                  className={({ isActive }) => (isActive ? "d-bg-change" : "")}
                >
                  <span>{menu.icon}</span>
                  <p className={open ? "" : "d-sidebar-menu-open"}>
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
