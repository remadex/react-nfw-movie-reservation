import React from 'react';
import format from 'date-fns/format';

const TableReservations = ({ data, deleteReservation }) => (
  <div className="bg-white p-8 shadow-sm">
    <div className="grid grid-cols-4 border-b-2 border-gray-600 mb-4">
      <div className="font-semibold text-lg">Informations sur le client</div>
      <div className="font-semibold text-lg">Informations sur le film</div>
      <div className="font-semibold text-lg text-center">Montant total</div>
      <div className="font-semibold text-lg text-right">Action</div>
    </div>
    {data.length === 0 ? (
      <div className="flex flex-col items-center text-lg">
        Aucune réservation disponible
      </div>
    ) : (
      ''
    )}
    {data.map((element) => (
      <div
        className="grid grid-cols-4 py-3 items-center border-b border-gray-200 last:border-none"
        key={element.id}>
        <div>
          Nom: <b>{element.client.lastName}</b>
          <br />
          Prénom: <b>{element.client.firstName}</b>
          <br />
          Email: <b>{element.client.email}</b>
          <br />
          Téléphone: <b>{element.client.phone}</b>
          <br />
        </div>
        <div>
          Titre: <b>{element.movie.name}</b>
          <br />
          Prix: <b>{element.movie.price}</b>
          <br />
          Horaire: <b>{element.movie.schedule}</b>
          <br />
          Date: <b>{format(element.date, 'dd/LL/y')}</b>
          <br />
        </div>
        <b className="text-indigo-800 text-center text-2xl">
          {element.movie.price * element.number}€
        </b>
        <div className="flex justify-end">
          <button type="button" onClick={() => deleteReservation(element.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 duration-100 hover:text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default TableReservations;
