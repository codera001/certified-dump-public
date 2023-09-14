import React, { useEffect, useState } from "react";
import "./Tickets.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Tickets = () => {
  // https://api.certifieddump.com/api/getSupportChat?senderId=12345
  const [tickets, setTickets] = useState([]);
  const userId = sessionStorage.getItem("userId");
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

  useEffect(() => {
    sessionStorage.removeItem("ticket-subject")
    GetTickets();
  }, []);

  //   if (ticketData.length === 0) {
  //     return (
  //       <div className="mt-10">
  //         <h3 className="pl-4 font-bold md:text-xl">Support Ticket Lists</h3>
  //         <div className="my-10 text-center">No tickets</div>
  //       </div>
  //     );
  // }

  // stop showing the tickets if there is no ticket

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
