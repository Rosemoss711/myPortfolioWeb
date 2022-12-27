import React, { useRef } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./AboutMe.css";
import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";
const AboutMe = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };
  return (
    <motion.article
      intial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        id="aboutMeTitle"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        ABOUT ME!
      </motion.h1>
      <Container>
        <Grid2
          container
          spacing={2}
          sx={{
            m: 10,
          }}
        >
          <Grid2 md={12}>
            <h1 className="amContent">개발자를 꿈꾸는 채송화입니다.</h1>
            <p id="story">
              다른 분야에 오래 있다가 우연히 개발을 접하게 되었습니다.
              <br />
              <br />
              드디어 적성에 맞는 일을 찾았다고 생각하여 계속 도전하고 있습니다.
              <br />
              <br />
              2022년 8월 Java국비과정을 수료하였고,
              <br />
              <br />
              계속해서 새로운 기술을 공부하며 개인프로젝트를 진행 중입니다.
            </p>
          </Grid2>
        </Grid2>
        <div ref={ref}>
          <motion.p
            className="amTitle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 0 : 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            SKILLS
          </motion.p>
        </div>
        <hr />

        <Grid2 container spacing={2}>
          <Grid2 xs={4} md={4}>
            <motion.div
              whileHover={{ x: 3, y: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardHeader className="amCardTitle" title="Frontend" />
                <CardContent>
                  <Grid2 container spacing={1} rowSpacing={2} columns={10}>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={
                          require("../../assets/images/HTML5_Logo.svg").default
                        }
                        alt="HTML5"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={
                          require("../../assets/images/CSS3_logo_and_wordmark.svg")
                            .default
                        }
                        alt="CSS3"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/logo192.png")}
                        alt="React"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/js.png")}
                        alt="JS"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/jQueryLogo.png")}
                        alt="jQuery"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}></Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={
                          require("../../assets/images/bootstrap-logo.svg")
                            .default
                        }
                        alt="BootStrap"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/muilogo.png")}
                        alt="Mui"
                      />
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 xs={4} md={4}>
            <motion.div
              whileHover={{ y: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardHeader className="amCardTitle" title="Backend" />
                <CardContent>
                  <Grid2 container spacing={1} rowSpacing={2} columns={10}>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={
                          require("../../assets/images/Java_logo.svg").default
                        }
                        alt="Java"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={
                          require("../../assets/images/spring-edf462fec682b9d48cf628eaf9e19521.svg")
                            .default
                        }
                        alt="Spring"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/oracleDbLogo.png")}
                        alt="Oracle"
                      />
                    </Grid2>
                    <Grid2 className="logoGrid" xs={5}>
                      <img
                        className="logos"
                        src={require("../../assets/images/logo-mysql-170x115.png")}
                        alt="MySql"
                      />
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 xs={4} md={4}>
            <motion.div
              whileHover={{ x: -3, y: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ minWidth: 275 }}>
                <CardHeader className="amCardTitle" title="Version Control" />
                <CardContent>
                  <Grid2 container spacing={1} rowSpacing={2} columns={10}>
                    <Grid2 className="logoGrid" xs={10}>
                      <img
                        className="logos"
                        src={require("../../assets/images/github-mark.png")}
                        alt="GitHub"
                      />
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
        </Grid2>
        <div ref={ref}>
          <motion.p
            className="amTitle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            ARCHIVING
          </motion.p>
        </div>
        <hr />
        <Grid2 container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid2 xs={4}>
            <a
              href="https://github.com/Rosemoss711"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <img
                    src={require("../../assets/images/github-mark.png")}
                    alt="GitHub"
                    width={"50px"}
                  />

                  <img
                    src={require("../../assets/images/GitHub_Logo.png")}
                    alt="GitHub"
                    width={"100px"}
                  />
                </CardContent>
              </Card>
            </a>
          </Grid2>
          <Grid2 xs={4}>
            <a
              href="https://rosemoss711.notion.site/Dashboard-1165c770728245799924074e12e8b3c5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card sx={{ minWidth: 200 }}>
                <CardContent className="archivingWrap">
                  <img
                    src={require("../../assets/images/notion-logo.png")}
                    alt="Notion"
                    width={"50px"}
                  />
                  <label className="notion">Notion</label>
                </CardContent>
              </Card>
            </a>
          </Grid2>
        </Grid2>
      </Container>
    </motion.article>
  );
};

export default AboutMe;
