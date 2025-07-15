import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center mb-2">Who I Am</h2>
      <div className="row">
        <div className="col-md-12">
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello, I'm <strong>Sanjay Kumar S</strong>, a dedicated Web Application Developer 
            with a strong track record in building scalable, secure, and high-performance web solutions. 
            I specialize in backend development and full-stack technologies including <strong>Laravel</strong>, <strong>Vue.js</strong>, 
            <strong>React.js</strong>, <strong>Spring Boot</strong>, and <strong>PHP</strong>. Currently, I'm working at 
            <strong> Trisan Ventures Private Limited</strong>, developing dynamic web applications and collaborating 
            closely with UI/UX teams to deliver seamless user experiences.
          </motion.p>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A Mechanical Engineering graduate turned software developer, I’ve leveraged my problem-solving mindset 
            and adaptability across diverse projects — from <strong>Hospital Management Systems</strong> to 
            <strong> E-Commerce websites</strong> and <strong>Financial Platforms</strong>. My project experience reflects 
            my ability to plan, build, and deliver real-world digital solutions.
          </motion.p>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            I’m passionate about continuous learning, exploring new technologies, and refining my development workflow.
            Outside of work, you’ll find me experimenting with new frameworks, contributing to projects, and exploring 
            the latest in web technologies. Feel free to check out my work and connect!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
