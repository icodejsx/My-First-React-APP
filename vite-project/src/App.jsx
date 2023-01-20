import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counters from "./components/counters";
import Movie from "./components/movie/movie";

const App = () => {
  return (
    <div>
      <Counters />
      <Movie />
    </div>
  );
};
export default App;
