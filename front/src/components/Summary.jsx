import React from 'react';

const Summary = ({ reservation }) => (
  <div className="flex">{reservation.movie.price * reservation.number}€</div>
);

export default Summary;
