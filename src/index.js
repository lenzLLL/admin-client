import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./app/store"
import {BrowserRouter as Router} from "react-router-dom"
import AlterTemplate from "react-alert-template-basic"
import {Provider as AlertProvider,positions,transitions} from "react-alert"


const options = {
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <AlertProvider template = {AlterTemplate} {...options}>
    <Router>  
    <App />
    </Router>
    </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals