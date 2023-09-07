import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../../../component/Footer/Footer";
import "./Layout.css";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { Button } from "../Button/Button";

const Layout = ({ children }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const onIdle = () => {
    sessionStorage.setItem("isIdle", true);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  const { isIdle } = useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 20,
  });

  useEffect(() => {
    if (sessionStorage.getItem("isIdle") === "true") {
      logout();
    }
  }, []);
  return (
    <div className="d-layout">
      {modal && (
        <div className="d-layout-popup">
          <p>Your session just expired. Would like to continue?</p>
          <Button onClick={logout}>Yes</Button>
          <Button onClick={modalClose}>No</Button>
        </div>
      )}
      <div className="d-inner-layout">
        <Nav />
        <Sidebar />
        <main className="d-children user-scroll">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
