import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

function HeaderTicketMobile({ ticket }) {
  const renderTopLabel = () => {
    if (ticket.ticketTopLabel !== null) {
      return (
        <div className="topLabel">
          <p className="topLabel__text">{ticket.ticketTopLabel}</p>
        </div>
      );
    } else {
      return <div className="topLabel topLabel--hidden"></div>;
    }
  };

  return (
    <div className="ticket__header--mobile">
      {renderTopLabel()}
      <div className="ticket__info">
        <h2 className="ticket__title">{ticket.ticketName}</h2>
        <LinesEllipsis
          text={ticket.ticketDescription}
          maxLine="4"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="ticket__description"
        />
      </div>
    </div>
  );
}

export default HeaderTicketMobile;
