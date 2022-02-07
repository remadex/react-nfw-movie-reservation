/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApiClient, ApiProvider } from 'jsonapi-react';
import './assets/index.css';
import './assets/loader.css';
import App from './App';
import schema from './schema';

const client = new ApiClient({
  url: 'http://localhost:8000/api/v1/',
  schema,
});

console.log(client);

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider client={client}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
