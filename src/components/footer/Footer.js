import { Link, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Typography id="footerTypography" color="#bdbdbd" align="center">
        {"Copyright © "}
        <Link color="inherit" href="">
          Rosemoss
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
