import { useState } from "react";
import reactLogo from "./assets/react.svg";
import WORK from "./assets/work.webp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={WORK} height="50%" width="80%" />

      <div>
        <a href="rid1.xyz" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="rid1.xyz" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>DEVELOPMENT MODE</h1>
      <div className="card">
        <a href="https://rid1-test-production.web.app">
          <button>GO TO PROD-MODE</button>
        </a>
        <p>SITE IS UNDER CONSTRUCTION!</p>
      </div>
    </div>
  );
}

export default App;
