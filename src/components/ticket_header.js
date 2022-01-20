import React from "react";

function HeaderTicket({ ticket }) {
  console.log(ticket);
  return (
    <div>
      <h3>{ticket.ticketName}</h3>
      <p>{ticket.ticketDescription}</p>

      <h4>{ticket.ticketActualPrice}</h4>
      <p>ex 21% VAT</p>
    </div>
  );
}

export default HeaderTicket;
