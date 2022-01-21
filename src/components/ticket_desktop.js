import React from "react";
import HeaderTicket from "./ticket_header.js";
import TableDesktop from "./table_desktop.js";

function TicketDesktop({ ticket, perksList }) {
  return (
    <div className="ticket">
      {ticket && (
        <div>
          <HeaderTicket ticket={ticket} />
          <TableDesktop ticket={ticket} perksList={perksList} text={true} />
        </div>
      )}
    </div>
  );
}

export default TicketDesktop;
