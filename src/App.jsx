import React from "react";
import "./App.css";
import CustomCursor from "./components/Cursor/CustomCursor"; // Custom cursor component
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CustomNavbar from "./components/navbar/CustomNavbar"; // Navbar component
import CustomFooter from "./components/footer/CustomFooter"; // Footer component
import Home from "./components/home/Home"; // Home Section
import About from "./components/about/About"; // About Section
import Projects from "./components/projects/Projects"; // Projects section
import ContactForm from "./components/contact/ContactForm"; // Contact form component
import Skills from "./components/skills/Skills"; // Skills section

function App() {
  return (
    <>
      <CustomCursor />
      <CustomNavbar />
      <ScrollToTop/>

      {/* Add IDs for Smooth Scrolling */}
      <div id="home">
        <Home />
      </div>

      <div id="about" className="container mt-5">
        <About />
      </div>

      <div id="skills" className="container mt-5">
        <Skills />
      </div>

      <div id="projects" className="container mt-5">
        <Projects />
      </div>

      <div id="contact" className="container mt-5">
        <ContactForm />
      </div>

      <CustomFooter />
    </>
  );
}

export default App;
