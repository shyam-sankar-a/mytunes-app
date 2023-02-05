import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { theme } from "./themes";

//const saga = createSagaMiddleware();
//const store = createStore(rootReducer, applyMiddleware(saga));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

