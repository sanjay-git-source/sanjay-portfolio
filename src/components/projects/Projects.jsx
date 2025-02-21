import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Custom styles

const projects = [
  {
    title: "Hospital Management System",
    description: "Developed an integrated system to manage patient data, appointments, billing, and inventory, improving healthcare services.",
    image: "https://i.postimg.cc/rw3ZYdHb/dr.jpg",
    link: "https://www.ssicomputereducation.com/HospitalManagementSystem/",
  },
  {
    title: "Finance Website Development",
    description: "Developed a website offering financial event updates, along with admin management functionalities.",
    image: "https://i.postimg.cc/rp4Z6VXp/finance.jpg",
    link: "https://kingdomsfinancial.com/",
  },
  {
    title: "SSI Website Development",
    description: "Built a system for online assessments, automated grading, and certificate generation for an educational platform.",
    image: "https://i.postimg.cc/zDFMXGLb/com.jpg",
    link: "https://www.new.ssicomputereducation.com/",
  },
  
  {
    title: "Property Consultant Website",
    description: "Designed and developed a responsive website for property consultancy, ensuring seamless user experience.",
    image: "https://i.postimg.cc/hPhrWDVq/home.png",
    link: "https://ssicomputereducation.com/ssdassetnexus.com/",
  },
  {
    title: "Football Academy Website Development",
    description: "Designed and developed a website featuring event updates, media content, and login options for admins and members.",
    image: "https://i.postimg.cc/RZNbR1gK/fc.jpg",
    link: "https://ssicomputereducation.com/mariyafootballclub.com/",
  },
  {
    title: "Supermarket Billing Software (.exe)",
    description: "Developed a Java-based billing system with SQL database integration for efficient supermarket operations.",
    image: "https://i.postimg.cc/7Zsk2KdB/billing.jpg",
    link: "https://github.com/sanjay-git-source/BillingSoftware",
  },
  {
    title: "Spring Boot CRUD Application",
    description: "Developed a CRUD application using Spring Boot as the backend framework, MSSQL as the database, and HTML/CSS templates for the frontend.",
    image: "https://i.postimg.cc/mkxGFwv3/server.jpg",
    link: "https://github.com/sanjay-git-source/spring-boot-Crud",
  },  
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React.js and Bootstrap, showcasing skills and projects.",
    image: "https://i.postimg.cc/wBzLvgRM/potfolio.jpg",
    link: "https://sanjs-portfolio.netlify.app/",
  },
  {
    title: "Chatapp",
    description: "Developed a real-time chat application by using PHP, JavaScript, and MySQL. ",
    image: "https://i.postimg.cc/m2Wh83zV/chatapp.jpg",
    link: "https://github.com/sanjay-git-source/ChatApp",
  },
  {
    title: "Netflix-Clone",
    description: "Developed a Netflix Clone by using Laravel as the backend framework and MSSQL as the database.",
    image: "https://i.postimg.cc/B6tJnb8j/netflix.jpg",
    link: "https://github.com/sanjay-git-source/netflix-clone",
  },
  {
    title: "React + Laravel CRUD",
    description: "Developed a full-stack CRUD application using React for the frontend, Laravel as the backend framework, and MySQL as the database.",
    image: "https://i.postimg.cc/zvW8dMCP/reactapp.jpg",
    link: "https://github.com/sanjay-git-source/ReactappWithLaravel",
  }
  
];

const Projects = () => {
  return (
    <motion.div 
    className="container mt-5"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-center mb-4">My Projects</h2>
    
    <div className="row">
      {projects.map((project, index) => (
        <motion.div 
          key={index} 
          className="col-md-4"
          initial={{ opacity: 0, x: -50 }}  // Start left
          whileInView={{ opacity: 1, x: 0 }}  // Animate into view
          transition={{ duration: 0.8 }}      // Smooth animation
        >
          <div className="card project-card h-150">
            <img src={project.image} className="card-img-top" alt={project.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
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
