import React, { useState, useEffect } from "react";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);
  //   console.log(ticket);

  useEffect(() => {
    setPerksList(getPerksList());
  }, [ticketData]);
  //   console.log(ticket);

  const getPerksList = () => {
    let perksArray = [];

    if (ticketData) {
      for (let i = 0; i < ticketData.length; i++) {
        for (let j = 0; j < ticketData[i].ticketPerks.length; j++) {
          perksArray.push(ticketData[i].ticketPerks[j].ticketPerk);
        }
      }
      //   console.log(perksArray);
    }
    return [...new Set(perksArray)];
  };

  const listItems = perksList.map((perk, index) => <li key={index}>{perk}</li>);

  const checkmarkList = () => {
    const ticketPerks = ticket.ticketPerks;
    let response;

    // perksList.map((perk, index) => {
    //   for (let i = 0; i < ticketPerks.length; i++) {
    //     if (
    //       perk === ticketPerks[i].ticketPerk &&
    //       ticketPerks[i].perkActive === "1"
    //     ) {
    //       console.log(ticket.ticketName + perk + " X");
    //     } else {
    //       console.log(ticket.ticketName + perk + " NOT included");
    //     }
    //   }
    // });
  };

  return (
    <div>
      <ul>{listItems}</ul>
      <span>{checkmarkList()}</span>
    </div>
  );
}

export default TableDesktop;
