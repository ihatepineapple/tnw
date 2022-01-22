import React, { useState, useEffect } from "react";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);
  const [checkmarkList, setCheckmarkList] = useState([]);

  useEffect(() => {
    setPerksList(getPerksList());
  }, [ticketData]);

  useEffect(() => {
    setCheckmarkList(getResponseArray());
  }, [ticket]);

  const getPerksList = () => {
    let perksArray = [];

    if (ticketData) {
      for (let i = 0; i < ticketData.length; i++) {
        for (let j = 0; j < ticketData[i].ticketPerks.length; j++) {
          perksArray.push(ticketData[i].ticketPerks[j].ticketPerk);
        }
      }
    }
    return [...new Set(perksArray)];
  };

  const listItems = perksList.map((perk, index) => <li key={index}>{perk}</li>);

  const ticketPerks = ticket.ticketPerks;

  const getResponseArray = () => {
    let responseArray = [];

    if (ticket) {
      const filteredTicketPerks = new Set(
        ticketPerks
          .filter(({ perkActive }) => perkActive)
          .map(({ ticketPerk }) => ticketPerk)
      );

      perksList.map((perk) => {
        if (filteredTicketPerks.has(perk)) {
          responseArray.push("true");
        } else {
          responseArray.push("false");
        }
      });

      console.log(responseArray);
      return responseArray;
    }
  };
  //   console.log(checkmarkList);
  //   console.log(perksList);

  return (
    <div>
      <ul>{listItems}</ul>
      {/* <span>{ticketData && ticket && getResponseArray()}</span> */}
    </div>
  );
}

export default TableDesktop;
