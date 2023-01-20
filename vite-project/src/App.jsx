import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/counter";
import Body from "./components/body/body";

const App = () => {
  return (
    <div>
      <Counter />
      <Body />
    </div>
  );
};
export default App;
