import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Simferopol" />
        <footer>
          <small>
            <a href="" target="_blank" rel="noreferrer">
              Open-source code
            </a>
            , by Iryna Agafonov
          </small>
        </footer>
      </div>
    </div>
  );
}
