import React from "react";
import HeaderTicket from "./ticket_header.js";
import TableDesktop from "./table_desktop.js";

function TicketDesktop({ perksList }) {
  console.log(perksList);
  return (
    <div className="ticket">
      {/* {ticket && perksList && (
        <div>
          <HeaderTicket ticket={ticket} />
          <TableDesktop ticket={ticket} perksList={perksList} text={true} />
        </div>
      )} */}
    </div>
  );
}

export default TicketDesktop;
