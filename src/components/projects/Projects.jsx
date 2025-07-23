import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Custom styles

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive web application for managing patient records, appointments, billing, and inventory, improving operational efficiency in healthcare services.",
    image: "https://i.postimg.cc/rw3ZYdHb/dr.jpg",
    link: "https://www.ssicomputereducation.com/HospitalManagementSystem/",
  },
  {
    title: "Finance Website Development",
    description:
      "Developed a responsive website providing financial event updates with secure admin management features for content and user control.",
    image: "https://i.postimg.cc/rp4Z6VXp/finance.jpg",
    link: "https://kingdomsfinancial.com/",
  },
  {
    title: "SSI Website Development",
    description:
      "Created an online assessment platform with automated grading, dynamic result processing, and instant certificate generation for educational institutions.",
    image: "https://i.postimg.cc/zDFMXGLb/com.jpg",
    link: "https://www.new.ssicomputereducation.com/",
  },
  {
    title: "Property Consultant Website",
    description:
      "Designed a responsive, user-friendly property consultancy website featuring real-time listings, contact integration, and dynamic property management.",
    image: "https://i.postimg.cc/hPhrWDVq/home.png",
    link: "https://ssicomputereducation.com/ssdassetnexus.com/",
  },
  {
    title: "Football Academy Website",
    description:
      "Built a modern website for a football academy, showcasing event updates, photo galleries, and member login functionality for players and administrators.",
    image: "https://i.postimg.cc/RZNbR1gK/fc.jpg",
    link: "https://ssicomputereducation.com/mariyafootballclub.com/",
  },
  {
    title: "Supermarket Billing Software (.exe)",
    description:
      "Java-based desktop application for efficient billing operations in supermarkets, featuring SQL database integration and inventory management capabilities.",
    image: "https://i.postimg.cc/7Zsk2KdB/billing.jpg",
    link: "https://github.com/sanjay-git-source/BillingSoftware",
  },
  {
    title: "Spring Boot CRUD Application",
    description:
      "Developed a CRUD web application using Spring Boot and MSSQL, managing records through a responsive HTML/CSS frontend with RESTful API integration.",
    image: "https://i.postimg.cc/mkxGFwv3/server.jpg",
    link: "https://github.com/sanjay-git-source/spring-boot-Crud",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React.js and Bootstrap to showcase my skills, projects, and professional experience in a clean and interactive layout.",
    image: "https://i.postimg.cc/wBzLvgRM/potfolio.jpg",
    link: "https://sanjs-portfolio.netlify.app/",
  },
  {
    title: "ChatApp",
    description:
      "Real-time chat application developed using PHP, JavaScript, and MySQL with secure login, live messaging, and user management features.",
    image: "https://i.postimg.cc/m2Wh83zV/chatapp.jpg",
    link: "https://github.com/sanjay-git-source/ChatApp",
  },
  {
    title: "Netflix Clone",
    description:
      "A video streaming platform clone created using Laravel and MSSQL, featuring dynamic content management, user authentication, and media playback functionalities.",
    image: "https://i.postimg.cc/B6tJnb8j/netflix.jpg",
    link: "https://github.com/sanjay-git-source/netflix-clone",
  },
  {
    title: "React + Laravel CRUD",
    description:
      "Full-stack CRUD application combining React for the frontend, Laravel for the backend, and MySQL for data storage with seamless API integration.",
    image: "https://i.postimg.cc/zvW8dMCP/reactapp.jpg",
    link: "https://github.com/sanjay-git-source/ReactappWithLaravel",
  },
  {
    title: "Sporty-Shop (E-Commerce)",
    description:
      "An e-commerce website with product filtering by size, color, category, and fabric. Includes admin product management, order system, and email notifications for customers and admins, built using PHP, JavaScript, and MySQL.",
    image: "https://i.postimg.cc/HnG6yc1H/banner-1.jpg",
    link: "https://github.com/sanjay-git-source/sporty-shop",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row">
        <h2 className="text-center mb-2">Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            initial={{ opacity: 0, x: -50 }} // Start left
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 0.8 }} // Smooth animation
          >
            <div className="card project-card h-150">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
