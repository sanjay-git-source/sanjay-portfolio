import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <motion.div 
      className="home-container d-flex align-items-center justify-content-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center ">
      <div className="profile-img-wrapper">
        <motion.img 
          src="https://i.postimg.cc/76mgdd66/profilepic.jpg"
          alt="Sanjay Kumar S" 
          className="profile-img"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        </div>
        
        <h1 className="mt-3">Sanjay Kumar S</h1>
        <h3 className="text-dark">Full-Stack Web Application Developer</h3>
        <p className="lead">Crafting Modern Web Solutions | Backend Specialist | Problem Solver</p>

        <div className="mt-4">
          <a href="https://www.linkedin.com/in/sanjay-kumar-5194a7343" target="_blank" className="button me-3">
            LinkedIn
          </a>
          <a href="https://github.com/sanjay-git-source" target="_blank" className="button me-3">
            GitHub
          </a>
          <a href="https://drive.google.com/file/d/1EXCdawEeTSVSC6SmQwxLUjiLdQroM7KI/view?usp=drivesdk" target="_blank" className="button me-3">
  View Resume
</a>

        </div>
      </div>
    </motion.div>
  );
};

export default Home;
