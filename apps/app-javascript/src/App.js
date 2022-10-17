import logo from "./logo.svg";
import "./App.css";
import { exampleJS } from "@monorepo/lib-javascript";
import { exampleTS } from "@monorepo/lib-typescript";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>JavaScript: {exampleJS()}</p>
        <p>TypeScript: {exampleTS()}</p>
      </header>
    </div>
  );
}

export default App;
