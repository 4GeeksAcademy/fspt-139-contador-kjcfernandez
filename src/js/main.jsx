import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "../styles/index.css";


let seconds = 0;

// Cada segundo aumenta el contador
setInterval(() => {
  seconds++;

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Home seconds={seconds} />
    </React.StrictMode>
  );
}, 1000);
