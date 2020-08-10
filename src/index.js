import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const workers = [
  "D’Marcus Williums",
  "T.J. Juckson", 
  "T’Variuness King",
  "Tyroil Smoochie-Wallace",
  "D’Squarius Green, Jr.",
  "Ibrahim Moizoos",
  "Jackmerius Tacktheratrix",
  "D’Isiah T. Billings-Clyde",
  "D’Jasper Probincrux III",
  "Leoz Maxwell Jilliumz",
  "Javaris Jamar Javarison-Lamar",
  "Davoin Shower-Handel",
  "Hingle McCringleberry",
  "L’Carpetron Dookmarriot",
  "J’Dinkalage Morgoone",
  "Xmus Jaxon Flaxon-Waxon",
]


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
