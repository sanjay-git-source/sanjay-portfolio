import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x - 10, y: position.y - 10 }} // Offset for better alignment
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    />
  );
};

export default CustomCursor;
