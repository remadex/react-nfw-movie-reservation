import React from 'react';

const AddMovieForm = ({ formik }) => (
  <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-x-16 gap-y-8">
    <div>
      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
        Titre du film
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nom du film"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.name}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
        Prix du film
      </label>
      <div className="mt-1 relative">
        <input
          type="number"
          name="price"
          id="price"
          placeholder="10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.price}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="schedule" className="block text-sm font-semibold text-gray-700">
        Horaire du film
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="schedule"
          id="schedule"
          placeholder="18H15"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.schedule}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.schedule && formik.errors.schedule ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.schedule}
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

export default AddMovieForm;
