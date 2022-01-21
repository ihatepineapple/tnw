import React, { useState, useEffect } from "react";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);

  //   console.log(text);
  //   console.log(ticket);
  console.log(ticketData);
  useEffect(() => {
    setPerksList(getPerksList());
  }, [ticketData]);

  const getPerksList = () => {
    let perksArray = [];

    if (ticketData) {
      for (let i = 0; i < ticketData.length; i++) {
        for (let j = 0; j < ticketData[i].ticketPerks.length; j++) {
          perksArray.push(ticketData[i].ticketPerks[j].ticketPerk);
        }
      }
      console.log(perksArray);
    }
    return [...new Set(perksArray)];
  };

  const listItems = perksList.map((perk) => <li>{perk}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default TableDesktop;
