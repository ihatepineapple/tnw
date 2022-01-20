import React from "react";

function HeaderTicket({ ticket }) {
  console.log(ticket);

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
    <div>
      <h2 className="ticket__title">{ticket.ticketName}</h2>
      <p className="ticket__description">{ticket.ticketDescription}</p>

      {renderPrice()}
      <p className="price__footnote">ex 21% VAT</p>

      <button className="btn">Register now</button>
    </div>
  );
}

export default HeaderTicket;
