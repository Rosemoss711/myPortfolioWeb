import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="welcomPage"
      intial={{ opacity: 0 }}
      animate={{ scale: [1, 1.2, 1.1] }}
      exit={{ opacity: 0 }}
    >
      <div id="container">
        <p id="welcome">WELCOME</p>
        <p id="msg">Portfolio By Chae Song Hwa</p>
      </div>
    </motion.div>
  );
};

export default Home;
