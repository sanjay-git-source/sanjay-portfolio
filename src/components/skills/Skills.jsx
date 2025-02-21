import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row text-center">
      <h2>My Skills</h2>
        {/* C */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/mDQn9b8n/c.png" // Add your image for C
              alt="C"
              className="skill-img mb-3"
            />
            <p>C</p>
          </motion.div>
        </div>

        {/* C++ */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/BQZz8fDh/cpp.png" // Add your image for C++
              alt="C++"
              className="skill-img mb-3"
            />
            <p>C++</p>
          </motion.div>
        </div>

        {/* Python */}
        {/* <div className="col-md-3 mb-4">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/python-logo.png" // Add your image for Python
              alt="Python"
              className="skill-img mb-3"
            />
            <p>Python</p>
          </motion.div>
        </div> */}

        {/* Java */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/44PLR2Mp/java.png" // Add your image for Java
              alt="Java"
              className="skill-img mb-3"
            />
            <p>Java</p>
          </motion.div>
        </div>

        {/* HTML */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/mkLmF7cc/html.png" // Add your image for HTML
              alt="HTML"
              className="skill-img mb-3"
            />
            <p>HTML</p>
          </motion.div>
        </div>

        {/* CSS */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/xTs4Mp39/css.png" // Add your image for CSS
              alt="CSS"
              className="skill-img mb-3"
            />
            <p>CSS</p>
          </motion.div>
        </div>

        {/* JavaScript */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/J0pP3tJp/js.png" // Add your image for JavaScript
              alt="JavaScript"
              className="skill-img mb-3"
            />
            <p>JavaScript</p>
          </motion.div>
        </div>

        {/* PHP */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/NGd4z994/php.png" // Add your image for PHP
              alt="PHP"
              className="skill-img mb-3"
            />
            <p>PHP</p>
          </motion.div>
        </div>

        {/* SQL Server */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/q72wb1yh/mssql.png" // Add your image for SQL Server
              alt="SQL Server"
              className="skill-img mb-3"
            />
            <p>SQL Server</p>
          </motion.div>
        </div>

        {/* MySQL */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/B6sgd2Bh/mysql.png" // Add your image for MySQL
              alt="MySQL"
              className="skill-img mb-3"
            />
            <p>MySQL</p>
          </motion.div>
        </div>

        {/* Arduino IDE */}
        {/* 
           <div className="col-md-3 mb-4">
          <motion.div
            className="skill-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/arduino-logo.png" // Add your image for Arduino IDE
              alt="Arduino IDE"
              className="skill-img mb-3"
            />
            <p>Arduino IDE</p>
          </motion.div>
        </div>
 */}
        {/* Laravel */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/2Sb2vk5x/laravel.png" // Add your image for Laravel
              alt="Laravel"
              className="skill-img mb-3"
            />
            <p>Laravel</p>
          </motion.div>
        </div>

        {/* React JS */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/jd9hRphn/react.png" // Add your image for React
              alt="React JS"
              className="skill-img mb-3"
            />
            <p>React JS</p>
          </motion.div>
        </div>

        {/* Spring Boot */}
        <div className="col-md-3 mb-4">
        <motion.div
  className="skill-card"
  whileInView={{ opacity: 1, y: 0 }}  // animate when the element enters the viewport
  initial={{ opacity: 0, y: 50 }}    // initial state before it enters the viewport
  transition={{ duration: 0.8 }}
>
            <img
              src="https://i.postimg.cc/3wjjCdQ2/springboot.png" // Add your image for Spring Boot
              alt="Spring Boot"
              className="skill-img mb-3"
            />
            <p>Spring Boot</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
