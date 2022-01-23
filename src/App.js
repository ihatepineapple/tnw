import React, { useState, useEffect } from "react";
import { withBreakpoints } from "react-breakpoints";
import axios from "axios";
import HeaderTicket from "./components/ticket_header.js";
import HeaderTicketMobile from "./components/ticket_header_mobile.js";
import FooterTicket from "./components/ticket_footer.js";
import TableDesktop from "./components/table_desktop.js";
import TableText from "./components/table_text.js";
import TableMobile from "./components/table_mobile.js";

import "./assets/styles/fonts.css";
import "./assets/styles/styles.css";

function App(props) {
  const { breakpoints, currentBreakpoint } = props;

  const [ticketData, setTicketData] = useState();

  useEffect(() => {
    axios
      .get(`https://next.tnw-staging.com/next-api/tickets.json`)
      .then((tickets) => setTicketData(tickets.data.data[1].tickets))
      .catch((error) => console.log(`${error}`));
  }, []);

  const renderTickets = (props) => {
    return (
      <div className="wrapper">
        {breakpoints[currentBreakpoint] < breakpoints.tabletLandscape ? (
          ""
        ) : (
          <div className="table__wrapper" paddingTop="332px">
            <TableText ticketData={ticketData} />
          </div>
        )}

        <div className="ticket__wrapper">
          {breakpoints[currentBreakpoint] < breakpoints.tabletLandscape
            ? ticketData &&
              ticketData.map((ticket, index) => (
                <div className={getTicketClasses(ticket)} key={index}>
                  <HeaderTicketMobile ticket={ticket} />
                  <TableMobile ticket={ticket} />
                  <FooterTicket ticket={ticket} />
                </div>
              ))
            : ticketData &&
              ticketData.map((ticket, index) => (
                <div className={getTicketClasses(ticket)} key={index}>
                  <HeaderTicket ticket={ticket} />
                  <TableDesktop ticket={ticket} ticketData={ticketData} />
                  <FooterTicket ticket={ticket} />
                </div>
              ))}
        </div>
      </div>
    );
  };

  const getTicketClasses = (ticket) => {
    if (ticket.ticketHighlighted) {
      return "ticket highlighted";
    } else {
      return "ticket";
    }
  };

  return <div className="App">{renderTickets()}</div>;
}

export default withBreakpoints(App);
