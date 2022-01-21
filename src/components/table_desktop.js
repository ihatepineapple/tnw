import React, { useState, useEffect } from "react";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);

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
    // console.log(ticketPerks[0].perkDescription);

    // for (let i = 0; i < ticketPerks.length; i++) {
    //   if (perksList.includes(ticketPerks[i].ticketPerk)) {
    //     return ticketPerks[i].ticketPerk + " X";
    //   } else {
    //     return;
    //   }
    // }

    ticketPerks.forEach((ticket) => {
      if (perksList.includes(ticket.ticketPerk)) {
        return "X";
      } else {
        return " not included";
      }
    });
  };

  return (
    <div>
      {/* <ul>{listItems}</ul> */}
      <ul>{checkmarkList()}</ul>
    </div>
  );
}

export default TableDesktop;
