import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;
