import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import MovieCards from "./Components/MovieCards/MovieCards";
import { originals, actions, comedy, horror } from "./urls";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MovieCards url={originals} title="Netflix Orginals" />
      <MovieCards url={actions} title="Action" isSmall />
      <MovieCards url={comedy} title="Comedy" isSmall />
      <MovieCards url={horror} title="Horror" isSmall />
      
      
    </div>
  );
}

export default App;
