import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useRef, useState } from "react";
import "./Support.css";
import Tickets from "../components/TicketList/Tickets";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Support = () => {
  const [tickets, setTickets] = useState(null);
  const userId = sessionStorage.getItem("userId");
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let modalRef = useRef();
  const closeModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  const GetTickets = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/getSupportChat?senderId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      setTickets(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const CreateTicket = async ({ subject, message }) => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/supportChat",
        {
          subject: subject,
          message: message,
          senderId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      toast.success(response.data.msg);
      setModal(!modal);
      GetTickets();
    } catch (error) {
      // toast.error(error.response.data.msg);
      console.log(error);
    }
  };

  useEffect(() => {
    sessionStorage.removeItem("ticket-subject");
    GetTickets();
  }, []);

  return (
    <Layout>
      <section className="d-support">
        <div>
          <h1>Support Ticket</h1>
        </div>
        {tickets ? (
          ""
        ) : (
          <div className="d-ticket-btn">
            <button onClick={() => setModal(!modal)}>
              Add a support ticket
            </button>
          </div>
        )}
        <div className="d-support-wrapper">
          {modal && (
            <div onClick={closeModal} className="d-modal-wrapper">
              <div ref={modalRef} className="d-modal-inner">
                <button onClick={() => setModal(false)}>X</button>
                <form onSubmit={handleSubmit(CreateTicket)}>
                  <input
                    type="text"
                    placeholder="Enter a subject"
                    {...register("subject", {
                      required: true,
                    })}
                  />
                  <div className="d-message-area">
                    <textarea
                      type="text"
                      {...register("message", { required: true })}
                      placeholder="Type your message"
                      rows="5"
                    />
                  </div>
                  <button className="d-modal-btn">Send</button>
                </form>
              </div>
            </div>
          )}
          <Tickets tickets={tickets} />
        </div>
      </section>
    </Layout>
  );
};

export default Support;
