import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const handleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleCounter}>Show/hide</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
