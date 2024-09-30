import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import localeFrMessages from "./locales/fr";
import localeItMessages from "./locales/it";

// Obtener el idioma del navegador
const browserLanguage = navigator.language || navigator.languages[0];

// Cargar los mensajes correspondientes
let messages;
switch (browserLanguage) {
  case "es-ES":
  case "es":
    messages = localeEsMessages;
    break;
  case "fr-FR":
  case "fr":
    messages = localeFrMessages;
    break;
  case "it-IT":
  case "it":
    messages = localeItMessages;
    break;
  case "en-US":
  case "en":
  default:
    messages = localeEnMessages;
    break;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={browserLanguage} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
