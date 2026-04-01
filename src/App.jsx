import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element=<Home/> />
          <Route path="/about" element=<About/> />
          <Route path="/projects" element=<Projects/> />
          <Route path="/contact" element=<Contact/> />



        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
