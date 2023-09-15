import React, { useEffect, useState } from "react";
import "./Tickets.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Tickets = ({tickets}) => {

  return (
    <div className="d-ticket-wrapper">
      <h3>Support Ticket Lists</h3>
      <div className="d-ticket-list">
        {tickets.map((ticket, id) => (
          <div key={id} className="d-tickets">
            <span>{ticket.subject}</span>
            <Link to={`/chat/${ticket.id}`}
            onClick={() => sessionStorage.setItem("ticket-subject", ticket.subject)}>
              <button className="d-sub-btn">View more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
