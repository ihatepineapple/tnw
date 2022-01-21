import React from "react";

function TableDesktop({ ticket, perksList, text }) {
  console.log(text);
  console.log(ticket);
  console.log(perksList);

  //   useEffect(() => {
  //     setPerksList(getPerksList());
  //   }, [ticket]);

  //   const getPerksList = () => {
  //     let perksArray = [];

  //     if (ticket) {
  //       for (let i = 0; i < ticket.length; i++) {
  //         for (let j = 0; j < ticket[i].ticketPerks.length; j++) {
  //           perksArray.push(ticket[i].ticketPerks[j].ticketPerk);
  //         }
  //       }
  //       //   console.log(perksArray);
  //     }
  //     return [...new Set(perksArray)];
  //   };

  //   console.log(perksList);

  //   const renderPerksList = () => {};

  return <div>table</div>;
}

export default TableDesktop;
