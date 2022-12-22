import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/member/Login";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutME/AboutMe";
import Contact from "./components/contact/Contact";
import SignUp from "./components/member/SignUp";
import Projects from "./components/projects/Projects";
import PageUpBtn from "./utils/pageUpBtn/PageUpBtn";

import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { useRef, useState } from "react";

function App() {
  const [inProp, setInProp] = useState(false);
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div>
      <Header />
      <TransitionGroup className="transitionWrapper">
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          key={location.pathname}
          timeout={300}
          classNames="fade"
        >
          <Routes>
            <Route
              path="/"
              exact={true}
              element={<Home style={{ position: "absolute" }} />}
            />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/signUp" exact={true} element={<SignUp />} />
            <Route
              path="/aboutMe"
              exact={true}
              element={<AboutMe style={{ position: "absolute" }} />}
            />
            <Route path="/projects" exact={true} element={<Projects />} />
            <Route path="/contact" exact={true} element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <PageUpBtn />
      <Footer />
    </div>
  );
}

export default App;
