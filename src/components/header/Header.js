import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "./Header.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <>
      {/* <Button
        id="loginBtn"
        size="small"
        variant="contained"
        // onClick={() => {
        //   navigate("/login");
        // }}
      >
        L
      </Button> */}
      <BottomNavigation
        sx={{ bgcolor: "#aba9a9", justifyContent: "space-around" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="menuText"
          label="Home"
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          className="menuText"
          label="about Me"
          onClick={() => navigate("/aboutMe")}
        />
        <BottomNavigationAction
          className="menuText"
          label="Projects"
          onClick={() => navigate("/projects")}
        />
        <BottomNavigationAction
          className="menuText"
          label="Contact"
          onClick={() => navigate("/contact")}
        />
      </BottomNavigation>
    </>
  );
};

export default Header;
