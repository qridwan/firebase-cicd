import { useState } from "react";
import reactLogo from "./assets/react.svg";
import WORK from "./assets/work.webp";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* < href="rid1.xyz" target="_blank"> */}
        <img src={WORK} height="50%" width="80%" />
      
      <div>
        <a href="rid1.xyz" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="rid1.xyz" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PRODUCTION MODE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Stay calm site is live!</p>
      </div>
    </div>
  );
}

export default App;
