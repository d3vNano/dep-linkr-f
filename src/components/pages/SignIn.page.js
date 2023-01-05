import { Link } from "react-router-dom";
import styled from "styled-components";
import react from 'react';
import { AuthContext } from "../../container/providers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
    const { setToken, token} = react.useContext(AuthContext);
    const [disable, setDisable] = useState(false);
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
setDisable(true)
  const promise = axios.post(URL,userLogin);
  promise.then((res) => {
    setDisable(false)
    setToken(res.data.token);
    navigate("/timeline");
    localStorage.setItem("token",res.data.token);
  });

  promise.catch((err) => {
    setDisable(false)
    console.log(err);
    //alert(err.response.data.message);
  })
}
return (
    <Container>

  <form onSubmit={loginApp}>
      <input
      name="email"
      value={userLogin.email}
      onChange={handleSignIn}
      type="email"
      placeholder="e-mail"
      
      />
       <input
      name="password"
      value={userLogin.password}
      onChange={handleSignIn}
      type="password"
      placeholder="password"

      />  
      <button onClick={login} type="submit" disabled={disable}>
        <h2>Log In</h2>
        </button>  
        <Link to={"/sign-up"}>
          <h2>First time? Create an account!</h2>
        </Link>
  </form>
      </Container>
);
}
const Container = styled.main`
display:flex;
flex-direction:column;
width: 375px;
height: 667px;
input{
    height: 65px;
    width: 429px;
    border-radius: 6px;
    background-color:#FFFFFF;
    top:317px;    
    margin-top:8px;  
}
button{
    height: 65px;
    width: 429px;
    left: 956px;
    top: 473px;
    border-radius: 6px;
background-color:#1877F2; 
margin-top:8px;   
}h2{
    height: 24px;
width: 262px;
left: 1044px;
top: 560px;
border-radius: nullpx;
color:#FFFFFF;
}
`
