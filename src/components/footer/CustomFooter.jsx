import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomFooter.css"; // Custom styles

const CustomFooter = () => {
  return (
    <footer className="footer mt-5 text-center">
      <div className="container">
        <p className="mb-2">Thanks for viewing my website! 😊</p>
        <div>
          <a href="https://www.linkedin.com/in/sanjay-kumar-5194a7343" target="_blank" className="footer-link mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/sanjay-git-source" target="_blank" className="footer-link mx-2">
            GitHub
          </a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Sanjay Kumar S | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default CustomFooter;
