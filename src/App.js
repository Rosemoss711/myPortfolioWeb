import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/member/Login";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutME/AboutMe";
import Contact from "./components/contact/Contact";
import SignUp from "./components/member/SignUp";
import Projects from "./components/projects/Projects";
import PageUpBtn from "./utils/pageUpBtn/PageUpBtn";
import { AnimatePresence } from "framer-motion";
import ProjectDangpert from "./components/projects/ProjectDangpert";
import ProjectComme from "./components/projects/ProjectComme";

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/signUp" exact={true} element={<SignUp />} />
          <Route path="/aboutMe" exact={true} element={<AboutMe />} />
          <Route path="/projects/*" exact={true} element={<Projects />}></Route>
          <Route
            path="/projects/dangpert"
            exact={true}
            element={<ProjectDangpert />}
          />
          <Route
            path="/projects/comme"
            exact={true}
            element={<ProjectComme />}
          />
          <Route path="/contact" exact={true} element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <PageUpBtn />
      <Footer />
    </div>
  );
}

export default App;
