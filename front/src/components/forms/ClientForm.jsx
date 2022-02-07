import React from 'react';

const ClientForm = ({ formik }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      formik.handleSubmit(e);
    }}
    className="grid grid-cols-2 gap-x-16 gap-y-8">
    <div>
      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
        Nom
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
        Prénom
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
        Email
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="xxx@xxx.xxx"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
        Téléphone
      </label>
      <div className="mt-1 relative">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="0499845434"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>
    </div>
    <div className="col-span-2 flex justify-end">
      <button type="submit" className="btnUi">
        Suivant
      </button>
    </div>
  </form>
);

export default ClientForm;
