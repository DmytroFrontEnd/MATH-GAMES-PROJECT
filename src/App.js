import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FirstScreen from "./Components/./Main/FirstScreen";
import Navbar from "./Components/./Main/Navbar";
import Games from "./Components/GamesComponentLinks/Games";
import Quiz from "./Components/GamePages/Quiz/Quiz";
import MathGameScreen from "./Components/GamePages/Math/Math";
import BackToGames from "./Components/BackToGames";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <FirstScreen />
        <Games />
        <MathGameScreen />
        <Quiz />
        <BackToGames />
      </Router>
      <footer className="footer">Developed by Dimitri Posyliuzhnyi</footer>
    </div>
  );
}

export default App;
