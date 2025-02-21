import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, x: -100 }}  // Start off the screen
      whileInView={{ opacity: 1, x: 0 }}  // Trigger when in view
      transition={{ duration: 1 }}
    >
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <motion.img
            src="https://i.postimg.cc/76mgdd66/profilepic.jpg"
            alt="Profile"
            className="img-fluid rounded-circle"
            initial={{ opacity: 0, x: -50 }}  // Start left
            whileInView={{ opacity: 1, x: 0 }}  // Animate into view
            transition={{ duration: 1 }}
          />
        </div>
        <div className="col-md-8">
          <motion.p
            className="lead about-text"
            initial={{ opacity: 0, x: 50 }}  // Start from the right
            whileInView={{ opacity: 1, x: 0 }}  // Animate to position
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hello, I'm Sanjay Kumar S, 
            As an Associate Software Engineer with a strong foundation in software development and web technologies, I am passionate about crafting innovative solutions that enhance efficiency and user experiences. With hands-on experience in designing and implementing projects like Smart Street Light systems and dynamic websites, I specialize in technologies such as HTML, CSS, JavaScript, PHP, Laravel and Spring Boot.
            A mechanical engineering graduate with an 81% academic record, I have successfully transitioned into the tech world, leveraging my problem-solving skills and adaptability to contribute meaningfully to diverse projects. I am eager to collaborate on challenging assignments that push the boundaries of technology while fostering continuous learning and professional growth.
          </motion.p>
          <motion.p
            className="lead about-text"
            initial={{ opacity: 0, x: 50 }}  // Start from the right
            whileInView={{ opacity: 1, x: 0 }}  // Animate to position
            transition={{ duration: 1, delay: 1 }}
          >
            In my spare time, I love experimenting with new technologies, contributing to open-source projects, and continuously improving my skills. Feel free to browse my projects, and don't hesitate to get in touch!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
