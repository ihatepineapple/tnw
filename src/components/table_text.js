import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";

function TableDesktop({ ticket, ticketData, text }) {
  const [perksList, setPerksList] = useState([]);
  const [checkmarkList, setCheckmarkList] = useState([]);

  useEffect(() => {
    setPerksList(getPerksList());
  }, [ticketData]);

  useEffect(() => {
    getResponseArray();
  }, [perksList]);

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

  const getResponseArray = () => {
    const ticketPerks = ticket.ticketPerks;
    let responseArray = [];

    const filteredTicketPerks = new Set(
      ticketPerks
        .filter(({ perkActive }) => perkActive)
        .map(({ ticketPerk }) => ticketPerk)
    );
    responseArray = perksList.map((perk) => filteredTicketPerks.has(perk));
    setCheckmarkList(responseArray);
  };

  const checkmarkItems = checkmarkList.map((item, index) => {
    if (item === true) {
      return (
        <li key={index}>
          <Icon
            path={mdiCheck}
            title="Checkmark"
            size={0.8}
            color="var(--info-text)"
          />
        </li>
      );
    } else {
      return (
        <li key={index} className="list_perks__item--hidden">
          {". "}
        </li>
      );
    }
  });

  return (
    <div>
      <ul className="list_perks">{listItems}</ul>
      <ul className="list_perks">{checkmarkItems}</ul>
    </div>
  );
}

export default TableDesktop;
