/* eslint-disable no-alert */
import React from 'react';
import { useMutation } from 'jsonapi-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import AddMovieForm from '../components/forms/AddMovieForm';

const AddMovie = () => {
  const [addMovie, { isLoading }] = useMutation('movies');
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      schedule: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Le titre du film est requis'),
      price: Yup.number('Le prix du film doit être un nombre').required(
        'Le prix du film est requis',
      ),
      schedule: Yup.string()
        .matches(/\d\dH\d\d/i, "Le format de l'horaire n'est pas correct.")
        .required("L'horaire du film est requis"),
    }),
    onSubmit: (values) => {
      addMovie({
        name: values.name,
        price: values.price,
        schedule: values.schedule,
      });
      toast('Le film a bien été créé');
      formik.resetForm();
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h1 className="mainTitle">Ajout d'un nouveau film</h1>
      <div className="bg-white p-8 shadow-sm">
        <AddMovieForm formik={formik} />
      </div>
    </div>
  );
};

export default AddMovie;
