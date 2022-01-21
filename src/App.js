import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketDesktop from "./components/ticket_desktop.js";

import "./assets/styles/fonts.css";
import "./assets/styles/styles.css";

function App() {
  const [ticketData, setTicketData] = useState();
  const [perksList, setPerksList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://next.tnw-staging.com/next-api/tickets.json`)
      .then((tickets) => setTicketData(tickets.data.data[1].tickets))
      .then(setPerksList(getPerksList()))
      .catch((error) => console.log(`${error}`));
  }, []);

  const getPerksList = () => {
    let perksArray = [];

    if (ticketData) {
      for (let i = 0; i < ticketData.length; i++) {
        for (let j = 0; j < ticketData[i].ticketPerks.length; j++) {
          perksArray.push(ticketData[i].ticketPerks[j].ticketPerk);
        }
      }
      // console.log(perksArray);
    }
    return [...new Set(perksArray)];
  };

  // console.log(perksList);

  const renderTickets = () => {
    return (
      ticketData &&
      ticketData.map((ticket, index) => (
        <TicketDesktop ticket={ticket} perksList={perksList} key={index} />
      ))
    );
  };

  return (
    <div className="App">
      <h1>tnw</h1>

      {renderTickets()}
    </div>
  );
}

export default App;
