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
    // relationships: {
    //   reservations: {
    //     type: 'reservations',
    //   },
    // },
  },
  clients: {
    type: 'clients',
    fields: {
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      phone: 'string',
    },
    // relationships: {
    //   reservations: {
    //     type: 'reservations',
    //   },
    // },
  },
};
export default schema;
