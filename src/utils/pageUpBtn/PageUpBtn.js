import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PageUpBtn.css";

const PageUpBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div className="scrollContainer">
        <motion.div
          id="topBtn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onMouseUp={scrollToTop}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          whileInView={{
            opacity: 1,
            rotate: [0, 360],
            borderRadius: ["20%", "50%"],
            transition: { delay: 0.05 },
          }}
        >
          Top
        </motion.div>
      </div>
    )
  );
};

export default PageUpBtn;
