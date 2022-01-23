import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTicket from "./components/ticket_header.js";
import FooterTicket from "./components/ticket_footer.js";
import TableDesktop from "./components/table_desktop.js";
import TableText from "./components/table_text.js";

import "./assets/styles/fonts.css";
import "./assets/styles/styles.css";

function App() {
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
        <div className="table__wrapper" paddingTop="332px">
          <TableText ticketData={ticketData} />
        </div>

        <div className="ticket__wrapper">
          {ticketData &&
            ticketData.map((ticket, index) => (
              <div className="ticket" key={index}>
                <HeaderTicket ticket={ticket} />
                <TableDesktop ticket={ticket} ticketData={ticketData} />
                <FooterTicket ticket={ticket} />
              </div>
            ))}
        </div>
      </div>
    );
  };

  return <div className="App">{renderTickets()}</div>;
}

export default App;
