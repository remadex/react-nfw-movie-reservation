const schema = {
  movies: {
    type: 'movies',
    fields: {
      name: 'string',
      price: 'number',
      schedule: 'string',
    },
  },
  reservations: {
    type: 'movies',
    fields: {
      number: 'number',
    },
  },
};
export default schema;
