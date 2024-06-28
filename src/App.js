import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Atlanta" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/ashley-ruiz-carrizales-360257159/"
            target="_blank"
            rel="noreferrer"
          >
            Ashley Ruiz-Carrizales
          </a>{" "}
          and is
          <a
            href="https://github.com/ashleyruizca/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
