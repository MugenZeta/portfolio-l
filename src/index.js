import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Bootsrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
//Bootstrap Bundle JS
import  "bootstrap/dist/js/bootstrap.bundle.min"

//Compnents
import Comp_Header from "./Components/Comp_Header";
import Comp_Body from "./Components/Comp_Body";
import Comp_Footer from "./Components/Comp_Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Comp_Header />
      <Comp_Body />
      <Comp_Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
