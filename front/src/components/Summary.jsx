import React from 'react';
import format from 'date-fns/format';

const Summary = ({ reservation, confirmReservation, changeCurrentStep }) => (
  <div>
    <h2 className="secondaryTitle">Récapitulatif</h2>
    <div>
      <p className="py-1">
        Nom: <b>{reservation.lastName}</b>
      </p>
      <p className="py-1">
        Prénom: <b>{reservation.firstName}</b>
      </p>
      <p className="py-1">
        Email: <b>{reservation.email}</b>
      </p>
      <p className="py-1">
        Téléphone: <b>{reservation.email}</b>
      </p>
    </div>
    <div className="bg-indigo-200 rounded-lg mt-8 p-8 text-lg flex flex-col items-center">
      <p>
        Vous avez réserver le film <b>{reservation.movie.name}</b> à{' '}
        {reservation.movie.schedule} ({reservation.number}{' '}
        {reservation.number > 1 ? 'places' : 'place'}) à la date du{' '}
        {format(reservation.date, 'd/L/y')}.
      </p>
      <p>
        Pour un montant total de{' '}
        <b className="text-indigo-800 ">
          {reservation.movie.price * reservation.number}€
        </b>
      </p>
      <button type="button" className="btnUi mt-8" onClick={confirmReservation}>
        Confirmer votre réservation
      </button>
      <button type="button" className="btnUi mt-8" onClick={() => changeCurrentStep(-1)}>
        Précédent
      </button>
    </div>
  </div>
);

export default Summary;
