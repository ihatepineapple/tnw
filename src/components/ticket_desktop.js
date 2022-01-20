import React from "react";
import HeaderTicket from "./ticket_header.js";

function TicketDesktop({ ticketData }) {
  //   console.log(ticketData);

  const renderTicketHeader = () => {
    return (
      ticketData &&
      ticketData.map((ticket) => (
        <div>
          <HeaderTicket ticket={ticket} />
        </div>
      ))
    );
  };

  return (
    <div>
      <h3>ticket desktop</h3>
      {renderTicketHeader()}
    </div>
  );
}

export default TicketDesktop;
