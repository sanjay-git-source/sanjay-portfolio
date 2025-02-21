import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; // Custom styles

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 50 }} // Start below
      whileInView={{ opacity: 1, y: 0 }} // Animate to position
      transition={{ duration: 0.8 }}
      
    >
      <h2 className="text-center mb-4">Hire Me</h2>
      <motion.form 
        onSubmit={handleSubmit} 
        className="contact-form"
        whileHover={{ scale: 1.02 }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
            className="form-control" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>

        <motion.button 
          type="submit" 
          className="btn btn-primary w-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
