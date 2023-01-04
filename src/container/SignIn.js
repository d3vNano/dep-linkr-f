import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState({email:"", password:""});
const navigate = useNavigate();

function handleLogin(e) {
  setUserLogin({ ...userLogin, [e.target.name]: e.target.value});
}
function loginApp(e) {
  e.preventDefault();
}

function login(){
  const URL = "http://localhost:4000/signin";

  const promise = axios.post(URL,userLogin);
  promise.then((res) => {
    setToken(res.data.token);
    navigate("/");
  });

  promise.catch((err) => {
    alert(err.response.data.message);
  })
}

}