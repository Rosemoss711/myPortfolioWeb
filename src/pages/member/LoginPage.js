import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../../components/member/Login";

const LoginPage = (props) => {
  const propsParam = useParams();
  const navigate = useNavigate();
  const id = propsParam.id;

  const [member, setMember] = useState({
    no: null,
    id: "",
    pw: "",
    enabled: "",
  });

  console.log(id);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
