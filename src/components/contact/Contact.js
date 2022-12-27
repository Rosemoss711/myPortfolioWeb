import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Container, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const [input, setInput] = useState({
    title: "",
    from_email: "",
    message: "",
  });

  const changeValue = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const resetValue = () => {
    setInput({
      title: "",
      from_email: "",
      message: "",
    });
  };

  const theme = createTheme({
    palette: {
      pink: {
        main: "pink",
      },
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (input.title === "") {
      alert("제목을 입력해주세요.");
      return;
    } else if (input.from_email === "") {
      alert("연락처를 입력해주세요.");
      return;
    } else if (input.message === "") {
      alert("이메일 내용을 입력해주세요.");
      return;
    } else {
      emailjs
        .sendForm(
          "service_oavp5ka",
          "template_j95chvc",
          form.current,
          "aNWlIZa9-rxYJCsa-"
        )
        .then(
          (result) => {
            alert("전송되었습니다.");
            resetValue();
            window.location.replace("/");
          },
          (error) => {
            alert("전송이 실패되었습니다.");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container id="contactWrap">
      <motion.h1
        id="contactTitle"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        CONTACT
      </motion.h1>
      <p id="myEmail">
        - {"\u00A0\u00A0"}rosemoss711@gmail.com{"\u00A0\u00A0"} -
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <Stack id="emailWrap" spacing={2}>
          <ThemeProvider theme={theme}>
            <TextField
              id="inputTitle"
              className="emailInput"
              label="제목"
              variant="standard"
              name="title"
              color="pink"
              onChange={changeValue}
            />
            <TextField
              id="inputEmail"
              className="emailInput"
              label="연락처"
              variant="standard"
              name="from_email"
              color="pink"
              type={"email"}
              onChange={changeValue}
            />
            <TextField
              id="inputMessage"
              className="emailInput"
              label="내용"
              variant="standard"
              name="message"
              color="pink"
              minRows={8}
              multiline
              onChange={changeValue}
            />
            <motion.button
              id="emailBtn"
              type="submit"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              메일 보내기
            </motion.button>
          </ThemeProvider>
        </Stack>
      </form>
    </Container>
  );
};

export default Contact;
