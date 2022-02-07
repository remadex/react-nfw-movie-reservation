import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AddMovie from './pages/AddMovie';
import Home from './pages/Home';
import ListMovies from './pages/ListMovies';
import Reservations from './pages/Reservations';

const App = () => (
  <Router>
    <div className="bg-background px-8 pt-4 min-h-screen flex flex-col">
      <header>
        <nav className="shadow-md rounded-sm px-4 py-2 bg-white">
          <ul className="flex items-center">
            <li className="itemLink">
              <NavLink
                className={({ isActive }) => (isActive ? 'activeItem' : '')}
                to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                Réserver un film
              </NavLink>
            </li>
            <li className="itemLink">
              <NavLink
                className={({ isActive }) => (isActive ? 'activeItem' : '')}
                to="/movies">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
                Liste des films
              </NavLink>
            </li>
            <li className="itemLink">
              <NavLink
                className={({ isActive }) => (isActive ? 'activeItem' : '')}
                to="/reservations">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Mes réservations
              </NavLink>
            </li>
            <li className="itemLink">
              <NavLink
                className={({ isActive }) => (isActive ? 'activeItem' : '')}
                to="/add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Ajouter un film
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="relative flex-grow container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<ListMovies />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </main>
      <Toaster
        position="top-right"
        toastOptions={{ duration: 2000, className: 'toastStyle' }}
      />
    </div>
  </Router>
);

export default App;
