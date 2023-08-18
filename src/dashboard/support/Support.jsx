import React from "react";
import Layout from "../components/Layout/Layout";
import { useRef, useState } from "react";
import Tickets from "../components/TicketList/Tickets";

// import Layout from "../components/Layout"

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
      <section className="support">
        <div className="support-wrapper">
          <div>
            <h1>Support Ticket</h1>
          </div>
          <div>
            <button onClick={() => setModal(!modal)}>
              Add a support ticket
            </button>
          </div>
          {modal && (
            <div onClick={closeModal}>
              <div ref={modalRef}>
                <button onClick={() => setModal(false)}>X</button>
                <form>
                  <input type="text" required placeholder="Enter a subject" />
                  <div className="">
                    <textarea
                      type="text"
                      required
                      placeholder="Type your message"
                      className=""
                      rows="5"
                    />
                  </div>
                  <button onClick={() => setModal(modal)}>Send</button>
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
