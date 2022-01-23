import React, { useState, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";

function TableText({ ticketData }) {
  const [perksList, setPerksList] = useState([]);

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

  const listItems = perksList.map((perk, index) => (
    <li key={index} className="list_perks__item">
      <LinesEllipsis
        text={perk}
        maxLine="1"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </li>
  ));

  return <ul className="list_perks list-perks__text_only">{listItems}</ul>;
}

export default TableText;
