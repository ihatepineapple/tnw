import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketDesktop from "./components/ticket_desktop.js";
import TableDesktop from "./components/table_desktop.js";

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

  return (
    <div className="App">
      <h1>tnw</h1>
      <TicketDesktop ticketData={ticketData} />
      <TableDesktop ticketData={ticketData} />
    </div>
  );
}

export default App;
