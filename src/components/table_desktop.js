import React, { useState, useEffect } from "react";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);
  const [checkmarkList, setCheckmarkList] = useState([]);

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
    }
    return [...new Set(perksArray)];
  };

  const listItems = perksList.map((perk, index) => <li key={index}>{perk}</li>);

  const ticketPerks = ticket.ticketPerks;

  const getResponseArray = () => {
    const filteredTicketPerks = new Set(
      ticketPerks
        .filter(({ perkActive }) => perkActive)
        .map(({ ticketPerk }) => ticketPerk)
    );
    const responseArray = perksList.map((perk) =>
      filteredTicketPerks.has(perk)
    );
    console.log(responseArray);
    // setCheckmarkList(responseArray);
    // console.log(checkmarkList);
  };

  return (
    <div>
      <ul>{listItems}</ul>
      <span>{getResponseArray()}</span>
    </div>
  );
}

export default TableDesktop;

// const perksArray = ["blue", "pink", "red", "green", "yellow", "orange", "white"]

// const ticketPerks = [{name:"pink", value: "1"}, {name:"green", value: null}, {name: "white", value: "1"}]

// const checkedPerks = new Set(
//   ticketPerks
//     .filter(({value}) => value)
//     .map(({name}) =>name)
// )

// console.log(checkedPerks)

// const response = perksArray.map(perk => checkedPerks.has(perk))
// console.log(response)
