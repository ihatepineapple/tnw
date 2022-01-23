import React, { useState, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";

function TableMobile({ ticket }) {
  const [perksListMobile, setPerksListMobile] = useState([]);

  useEffect(() => {
    setPerksListMobile(getResponseArrayMobile());
  }, [ticket]);

  const getResponseArrayMobile = () => {
    const ticketPerks = ticket.ticketPerks;

    const filteredTicketPerks = new Set(
      ticketPerks
        .filter(({ perkActive }) => perkActive)
        .map(({ ticketPerk }) => ticketPerk)
    );

    return [...new Set(filteredTicketPerks)];
  };

  console.log(perksListMobile);

  const listItemsMobile =
    perksListMobile &&
    perksListMobile.map((perk, index) => (
      <li key={index}>
        <LinesEllipsis
          text={perk}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
      </li>
    ));

  return (
    <div>
      <ul className="list_perks list_perks--centered">{listItemsMobile} </ul>
    </div>
  );
}

export default TableMobile;
