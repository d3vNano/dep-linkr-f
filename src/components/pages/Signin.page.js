import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState({email:"", password:""});
const navigate = useNavigate();

function handleSignIn(e) {
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
    navigate("/timeline");
  });

  promise.catch((err) => {
    alert(err.response.data.message);
  })
}
return (
  <form onSubmit={loginApp}>
      <input
      name="email"
      value={userLogin.email}
      onChange={handleSignIn}
      type="email"
      placeholder="e-mail"
      required
      />
       <input
      name="password"
      value={userLogin.password}
      onChange={handleSignIn}
      type="password"
      placeholder="password"
      required
      />  
      <button onClick={login} type="submit">
        <h2>Log In</h2>
        </button>  
        <Link to={"/sign-up"}>
          <h2>First time? Create an account!</h2>
        </Link>
  </form>
);
}
