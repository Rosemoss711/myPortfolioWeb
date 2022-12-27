import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Container id="footerWrap">
      <Typography id="footerTypography" color="#bdbdbd" align="center">
        {"Copyright © "}
        <Link to="/">Rosemoss</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Footer;
