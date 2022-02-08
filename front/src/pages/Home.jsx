import { useMutation, useQuery } from 'jsonapi-react';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Loader from '../components/Loader';
import ClientForm from '../components/forms/ClientForm';
import ReservationForm from '../components/forms/ReservationForm';
import Summary from '../components/Summary';
import Step from '../components/Step';

const Home = () => {
  const { data, isLoading } = useQuery('movies');
  const [addClient, { isLoading: isLoadingAddClient }] = useMutation('clients');
  const [addReservation, { isLoading: isLoadingAddReservation }] =
    useMutation('reservations');
  const [movies, setMovies] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [reservation, setReservation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    movie: {},
    number: 1,
    date: new Date(),
  });
  const navigate = useNavigate();
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

  const changeCurrentStep = (direction) => {
    setCurrentStep(currentStep + direction);
  };
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
    onSubmit: (values) => {
      setReservation({
        ...reservation,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      });
      changeCurrentStep(1);
    },
  });
  const today = new Date();
  const formikReservation = useFormik({
    initialValues: {
      movie: '',
      number: 1,
      date: new Date(),
    },
    validationSchema: Yup.object({
      movie: Yup.string().required('Le film est requis'),
      number: Yup.number().required('Le nombre de place est requis'),
      date: Yup.date()
        .min(today, 'La date ne peut pas être antérieur ou égale à la date du jour')
        .required('La date est requis'),
    }),
    onSubmit: async (values) => {
      const movie = data.find((el) => el.id === values.movie);
      setReservation({ ...reservation, number: values.number, date: values.date, movie });
      changeCurrentStep(1);
    },
  });
  const confirmReservation = async () => {
    const resultClient = await addClient({
      firstName: reservation.firstName,
      lastName: reservation.lastName,
      email: reservation.email,
      phone: reservation.phone,
    });
    console.log(resultClient.data);
    const resultReservation = await addReservation({
      number: reservation.number,
      date: new Date(reservation.date),
      client: resultClient.data,
      movie: reservation.movie,
    });
    console.log(resultReservation);
    toast('La réservation a bien été enregistrée');
    navigate(`/reservations`);
  };
  return (
    <div>
      {isLoading || isLoadingAddReservation || isLoadingAddClient ? (
        <Loader />
      ) : (
        <div>
          <Step currentStep={currentStep} />
          <div className="bg-white p-8 shadow-sm">
            {currentStep === 1 && <ClientForm formik={formikClient} />}
            {currentStep === 2 && (
              <ReservationForm
                formik={formikReservation}
                movies={movies}
                changeCurrentStep={changeCurrentStep}
              />
            )}
            {currentStep === 3 && (
              <Summary
                reservation={reservation}
                changeCurrentStep={changeCurrentStep}
                confirmReservation={confirmReservation}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
