import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Hero from "./components/Hero/Hero.component";
import Main from "./components/Main/Main.component";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Hero />
      <Sidebar />
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
