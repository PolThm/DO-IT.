import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from "./components/App";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

ReactDOM.render(
  <ModalProvider rootComponent={TransitionGroup}>
    <App />
  </ModalProvider>,
  document.getElementById('root')
);
