import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = (props) => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    no: null,
    id: "",
    pw: "",
    enabled: "",
  });

  const newMember = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const saveMember = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(member),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          navigate("/");
        } else {
          alert("등록 실패");
        }
      });
  };
  return <div></div>;
};

export default SignUpPage;
