import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App/App';
import HomePage from "./components/HomePage/HomePage"
import Packhouse from "./components/Packhouse/Packhouse"
import PackhouseChp2 from "./components/PackhouseChp2/PackhouseChp2"
import Modal from './components/Modal/Modal';
import Reflectie from "./components/Reflectie/Reflectie"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, {
    path: "/homepage",
    element: <HomePage />
  }, {
    path: "/packhouse",
    element: <Packhouse />
  }, {
    path: "/packhouse-Chapter-2",
    element: <PackhouseChp2 />
  },{
    path: "/reflectie",
    element: <Reflectie />
  }, {
    path: "/modal/:id",
    element: <Modal />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

