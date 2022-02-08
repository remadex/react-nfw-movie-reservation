import { useQuery } from 'jsonapi-react';
import React from 'react';
import toast from 'react-hot-toast';
import TableMovies from '../components/TableMovies';
import Loader from '../components/Loader';

const ListMovies = () => {
  const { data, isLoading, client } = useQuery('movies');
  const deleteItem = async (id) => {
    await client.delete(['movies', id]);
    toast('Le film a été supprimé de la liste');
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="mainTitle">Liste de nos films</h1>
          <TableMovies data={data} deleteMovie={deleteItem} />
        </div>
      )}
    </div>
  );
};

export default ListMovies;
