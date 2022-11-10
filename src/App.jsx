import reactLogo from "./assets/react.svg";
import WORK from "./assets/work.webp";

import "./App.css";

function App() {
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
      <a href="https://rid1-test-development.web.app">
        <button>GO TO DEV-MODE</button>
      </a>
      <div className="card">
        <p>Stay calm site is live!</p>
      </div>
    </div>
  );
}

export default App;
