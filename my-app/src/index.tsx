import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./dev.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/developer/loader";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loader = ReactDOM.createRoot(
  document.getElementById("loader") as HTMLElement
);
loader.render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>
);

reportWebVitals();
