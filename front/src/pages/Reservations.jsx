import { useQuery } from 'jsonapi-react';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import TableReservations from '../components/TableReservations';

const Reservations = () => {
  const { data, isLoading, client } = useQuery([
    'reservations',
    {
      'fields[reservations]': '*',
      'fields[movie]': 'name,price,schedule',
      'fields[client]': 'firstName,lastName,email,phone',
      include: ['movie', 'client'],
    },
  ]);
  const deleteItem = async (id) => {
    await client.delete(['reservations', id]);
    toast('La réservation a été supprimée de la liste');
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="mainTitle">Liste de vos réservations</h1>
          <TableReservations data={data} deleteReservation={deleteItem} />
        </div>
      )}
    </div>
  );
};

export default Reservations;
