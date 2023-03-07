import React, { useEffect, useState } from "react";
import "./App.css";
import Teclado from "./components/Teclado"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Teclado />
      <Footer/>
    </div>
  )
}

export default App
