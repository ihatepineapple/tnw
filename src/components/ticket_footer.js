import React from "react";

function FooterTicket({ ticket }) {
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
    <div className="ticket__footer">
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

export default FooterTicket;
