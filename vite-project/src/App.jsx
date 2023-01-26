import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counters from "./components/counters";
import Movie from "./components/movie/movie";
import Home from "./components/Home";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Counters />
      <Movie />
      <Home />
      <Product />
    </div>
  );
};
export default App;
