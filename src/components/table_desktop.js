import React, { useState, useEffect } from "react";

function TableDesktop({ ticketData }) {
  const [perksList, setPerksList] = useState([]);

  useEffect(() => {
    setPerksList(getPerksList());
  }, [ticketData]);

  const getPerksList = () => {
    let perksArray = [];

    if (ticketData) {
      for (let i = 0; i < ticketData.length; i++) {
        for (let j = 0; j < ticketData[i].ticketPerks.length; j++) {
          perksArray.push(ticketData[i].ticketPerks[j]);
        }
      }
      console.log(perksArray);
    }
    return perksArray;
  };

  //   console.log(perksList);

  return <div>table</div>;
}

export default TableDesktop;
