import React from 'react'
import "./Tickets.css"
import { Link } from 'react-router-dom';
const Tickets = () => {

  const ticketData = [
    {
      id: 1,
      subject: 'some subject',
    },
    {
      id: 2,
      subject: 'some thing',
    },
    {
      id: 3,
      subject: 'some texts',
    },
    {
      id: 4,
      subject: 'some tool',
    },
    {
      id: 5,
      subject: 'some help',
    },
    {
      id: 6,
      subject: 'some thanks',
    },
  ]

  //   if (ticketData.length === 0) {
  //     return (
  //       <div className="mt-10">
  //         <h3 className="pl-4 font-bold md:text-xl">Support Ticket Lists</h3>
  //         <div className="my-10 text-center">No tickets</div>
  //       </div>
  //     );
  // }
  
  return (
    <div className="">
      <h3 className="">Support Ticket Lists</h3>
      <div className="">
        {ticketData.map((ticket, id) => (
          <div key={id} className="">
            <span className="">{ticket.subject}</span>
            <Link
              to="/support"
              className=""
            >
              <span className="">View more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets