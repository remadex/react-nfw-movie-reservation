import { useQuery } from 'jsonapi-react';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../components/Loader';
import ClientForm from '../components/forms/ClientForm';
import ReservationForm from '../components/forms/ReservationForm';
import Summary from '../components/Summary';

const Home = () => {
  const { data, isLoading } = useQuery('movies');
  const [movies, setMovies] = useState([]);
  const [reservation, setReservation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    movie: {},
    number: 1,
  });
  useEffect(() => {
    if (data) {
      setMovies(
        data.map((movie) => ({
          label: `${movie.name} | ${movie.price}€ | ${movie.schedule}`,
          value: movie.id,
        })),
      );
    }
  }, [data]);
  const formikClient = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Le prénom est requis'),
      lastName: Yup.string().required('Le nom est requis'),
      email: Yup.string()
        .email("L'email n'est pas valide")
        .required("L'email' est requis"),
      phone: Yup.string()
        .matches(
          /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/,
          "Le format du téléphone n'est pas correct",
        )
        .required('Le numéro de téléphone est requis'),
    }),
    onSubmit: () => {},
  });
  const formikReservation = useFormik({
    initialValues: {
      movie: '',
      number: 1,
    },
    validationSchema: Yup.object({
      movie: Yup.string().required('Le film est requis'),
      number: Yup.number().required('Le nombre de place est requis'),
    }),
    onSubmit: (values) => {
      const movie = data.find((el) => el.id === values.movie);
      setReservation({ ...reservation, number: values.number, movie });
    },
  });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="mainTitle">Réserver un film</h1>
          <div className="bg-white p-8 shadow-sm">
            <h2 className="secondaryTitle">Informations personnelles</h2>
            <ClientForm formik={formikClient} />
            <h2 className="secondaryTitle">Choissisez votre film</h2>
            <ReservationForm formik={formikReservation} movies={movies} />
            <h2 className="secondaryTitle">Récapitulatif</h2>
            <Summary reservation={reservation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
