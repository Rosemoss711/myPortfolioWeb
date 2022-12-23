import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.div
        className="welcomPage"
        intial={{ opacity: 0 }}
        animate={{ scale: [1, 1.1] }}
        exit={{ opacity: 0 }}
      >
        <div id="container">
          <p id="welcome">WELCOME</p>
        </div>
      </motion.div>
      <p id="msg">Portfolio By Chae Song Hwa</p>
    </div>
  );
};

export default Home;
