import React from 'react';
import Select from 'react-select';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

registerLocale('fr', fr);
setDefaultLocale('fr');

const ReservationForm = ({ formik, movies, changeCurrentStep }) => (
  <>
    <h2 className="secondaryTitle">Choissisez votre film</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="grid grid-cols-2 gap-x-16 gap-y-8">
      <div>
        <label htmlFor="movie" className="block text-sm font-semibold text-gray-700">
          Choissisez votre film
        </label>
        <div className="mt-1 relative">
          <Select
            options={movies}
            isSearchable={false}
            className="border-gray-300"
            placeholder="Sélectionner un film"
            // inputValue={movies.find((m) => m.value === formik.values.movie).label}
            onChange={(option) => {
              formik.setFieldValue('movie', option.value);
            }}
          />
          {formik.errors.movie ? (
            <div className="absolute -bottom-5 text-sm text-red-600">
              {formik.errors.movie}
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="movie" className="block text-sm font-semibold text-gray-700">
          Date du film
        </label>
        <div className="mt-1 relative">
          <DatePicker
            selected={formik.values.date}
            dateFormat="dd/MM/yyyy"
            className="rounded py-1.5 border-gray-300 focus:ring-indigo-800"
            onChange={(date) => {
              formik.setFieldValue('date', date);
            }}
          />
          {formik.errors.date ? (
            <div className="absolute -bottom-5 text-sm text-red-600">
              {formik.errors.date}
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
      <div className="col-span-2 flex justify-end">
        <button
          type="button"
          className="btnUi mr-4"
          onClick={() => changeCurrentStep(-1)}>
          Précédent
        </button>
        <button type="submit" className="btnUi">
          Suivant
        </button>
      </div>
    </form>
  </>
);

export default ReservationForm;
