import React from 'react';
import Select from 'react-select';

const ReservationForm = ({ formik, movies }) => (
  <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-x-16 gap-y-8">
    <div>
      <label htmlFor="movie" className="block text-sm font-semibold text-gray-700">
        Choissisez votre film
      </label>
      <div className="mt-1 relative">
        <Select
          options={movies}
          isSearchable={false}
          placeholder="Sélectionner un film"
          onChange={(option) => {
            formik.setFieldValue('movie', option.value);
          }}
        />
        {/* <select
          id="country"
          name="country"
          autoComplete="country-name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
          {movies.map((movie) => (
            <option key={movie.id} value={movie.name}>
              {movie.name} | {movie.schedule} | {movie.price}€
            </option>
          ))}
        </select> */}
        {formik.errors.movie ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.movie}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="number" className="block text-sm font-semibold text-gray-700">
        Nombre de places
      </label>
      <div className="mt-1 relative">
        <input
          type="number"
          name="number"
          id="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.number && formik.errors.number ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.number}
          </div>
        ) : null}
      </div>
    </div>
    <div className="col-span-2 flex justify-center">
      <button type="submit" className="btnUi">
        Créer un film
      </button>
    </div>
  </form>
);

export default ReservationForm;
