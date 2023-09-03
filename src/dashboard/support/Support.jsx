import React from "react";
import Layout from "../components/Layout/Layout";
import { useRef, useState } from "react";
import "./Support.css";
import Tickets from "../components/TicketList/Tickets";

const Support = () => {
  const [modal, setModal] = useState(false);
  let modalRef = useRef();
  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  return (
    <Layout>
      <section className="d-support">
        <div>
          <h1>Support Ticket</h1>
        </div>
        <div className="d-ticket-btn">
          <button onClick={() => setModal(!modal)}>Add a support ticket</button>
        </div>
        <div className="d-support-wrapper">
          {modal && (
            <div onClick={closeModal} className="d-modal-wrapper">
              <div ref={modalRef} className="d-modal-inner">
                <button onClick={() => setModal(false)}>X</button>
                <form>
                  <input type="text" required placeholder="Enter a subject" />
                  <div className="d-message-area">
                    <textarea
                      type="text"
                      required
                      placeholder="Type your message"
                      rows="5"
                    />
                  </div>
                  <button className="d-modal-btn" onClick={() => setModal(modal)}>Send</button>
                </form>
              </div>
            </div>
          )}
          <Tickets />
        </div>
      </section>
    </Layout>
  );
};

export default Support;
