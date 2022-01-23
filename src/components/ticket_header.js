import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

function HeaderTicket({ ticket }) {
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

  const renderPrice = () => {
    if (ticket.ticketStrikethroughPrice !== null) {
      return (
        <h4 className="price">
          <span className="price__strikethrough">
            € {ticket.ticketStrikethroughPrice}
          </span>
          <span className="price__offer">€ {ticket.ticketActualPrice}</span>
        </h4>
      );
    } else {
      return <h4 className="price">€ {ticket.ticketActualPrice}</h4>;
    }
  };

  return (
    <div className="ticket__header">
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

      <div className="price__wrapper">
        {renderPrice()}
        <p className="price__footnote">ex 21% VAT</p>
        <div className="btn__wrapper">
          <button className="btn">Register now</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTicket;
