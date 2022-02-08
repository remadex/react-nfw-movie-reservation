const schema = {
  reservations: {
    type: 'reservations',
    fields: {
      number: 'number',
      date: 'date',
    },
    relationships: {
      movie: {
        type: 'movies',
      },
      client: {
        type: 'clients',
      },
    },
  },
  movies: {
    type: 'movies',
    fields: {
      name: 'string',
      price: 'number',
      schedule: 'string',
    },
  },
  clients: {
    type: 'clients',
    fields: {
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      phone: 'string',
    },
  },
};
export default schema;
