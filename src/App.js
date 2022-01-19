import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles/styles.css";

function App() {
  const [ticketData, setTicketData] = useState();

  useEffect(() => {
    axios
      .get(`https://next.tnw-staging.com/next-api/tickets.json`)
      .then((tickets) => setTicketData(tickets.data.data))
      .catch((error) => console.log(`${error}`));
  }, []);

  console.log(ticketData);
  return (
    <div className="App">
      <h1>tnw</h1>
    </div>
  );
}

export default App;
