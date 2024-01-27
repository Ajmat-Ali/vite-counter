import { useState } from "react";
import "./App.css";
import { Counter } from "./counterComponent/counter";

function App() {
  return (
    <div className="AppParent">
      <Counter />
    </div>
  );
}

export default App;
