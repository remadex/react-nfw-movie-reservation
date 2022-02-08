import React from 'react';
import { Link } from 'react-router-dom';

const TableMovies = ({ data, deleteMovie }) => {
  console.log(data);
  return (
    <div className="bg-white p-8 shadow-sm">
      <div className="grid grid-cols-4 border-b-2 border-gray-600 mb-4">
        <div className="font-semibold text-lg">Titre du film</div>
        <div className="font-semibold text-lg">Prix</div>
        <div className="font-semibold text-lg">Horaire</div>
        <div className="font-semibold text-lg text-right">Action</div>
      </div>
      {data.length === 0 ? (
        <div className="flex flex-col items-center text-lg">
          Aucun film disponible
          <Link to="/add" className="btnUi mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Ajouter un nouveau film
          </Link>
        </div>
      ) : (
        ''
      )}
      {data.map((element) => (
        <div
          className="grid grid-cols-4 py-3 items-center border-b border-gray-200 last:border-none"
          key={element.id}>
          <div className="flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            {element.name}
          </div>
          <div>
            {element.price}
            <span className="text-xs"> €</span>
          </div>
          <div>{element.schedule}</div>
          <div className="flex justify-end">
            <button type="button" onClick={() => deleteMovie(element.id)}>
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
};

export default TableMovies;
