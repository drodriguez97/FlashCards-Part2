import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>United State Trivia Questions</h1>
      <h4>Test you knowledge about the history of the United States with trivia questions</h4>
      <h5>Number of cards: 10</h5>
      <br></br>
      <Card />
    </div>
  );
}

export default App;
