import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { Link, Route, Routes, useParams } from "react-router-dom";
import ProjectDangpert from "./ProjectDangpert";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Projects = () => {
  const params = useParams();
  console.log(params);
  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

  const itemVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", mass: 1, duration: 1 },
    },
  };

  return (
    <motion.article
      className="projectsWrap"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Grid2 container columns={{ xs: 13 }}>
        <Grid2 item xs={6}>
          <motion.h1
            className="pjTitle"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible,
            }}
          >
            PROJECTS
          </motion.h1>
        </Grid2>
        <motion.h1
          className="pjTitle"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible,
          }}
        >
          <Grid2 item xs={1}>
            <div id="emptyBox"></div>
          </Grid2>
        </motion.h1>
        <Grid2 item xs={6}>
          <ul className="pjUl">
            <motion.li className="pjList" variants={itemVariants}>
              <Link className="pjLink" to="/projects/dangpert">
                당퍼트 - KH정보교육원 세미프로젝트
              </Link>
            </motion.li>
            <motion.li className="pjList" variants={itemVariants}>
              <Link className="pjLink" to="/projects/comme">
                COMME - KH정보교육원 파이널프로젝트
              </Link>
            </motion.li>
          </ul>
        </Grid2>
      </Grid2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route
          path="/dangpert"
          element={<ProjectDangpert style={{ position: "absolute" }} />}
        />
      </Routes>
    </motion.article>
  );
};

export default Projects;
