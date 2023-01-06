import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userRegistration, setUserRegistration] = useState({email:"", password:"", username:"", picture_url:""});
const [disable, setDisable] = useState(false)
  const navigate = useNavigate();

  function handleSignUp(e) {
    setUserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  }

  function signUpApp(e){
    e.preventDefault();
  }

  function registration() {

    const URL = "http://localhost:4000/signup";
setDisable(true)
    const promise = axios.post(URL, userRegistration);
    promise.then((res)=> {
      setDisable(false)
navigate("/");
    });
    promise.catch((err)=> {
      setDisable(false)
      alert(err.response.data.message);
    });
  }
  return (
    <Container>
           <StyleDescription>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </StyleDescription>
      <StyleForm>

    <form onSubmit={signUpApp}>
      <input
      name="email"
      value={userRegistration.email}
      onChange={handleSignUp}
      type="email"
      placeholder="e-mail"
 
      />
       <input
      name="password"
      value={userRegistration.password}
      onChange={handleSignUp}
      type="password"
      placeholder="password"
      
      />
       <input
      name="username"
      value={userRegistration.username}
      onChange={handleSignUp}
      type="username"
      placeholder="username"
      
      />
       <input
      name="picture_url"
      value={userRegistration.picture_url}
      onChange={handleSignUp}
      type="picture_url"
      placeholder="picture_url"
      
      />
      <button onClick={registration} type="submit" disabled={disable}>
        <h2>Sign Up</h2>
      </button>
    </form>
    
    <Link to="/">
      <h2>Switch back to log in</h2>
    </Link>
      </StyleForm>
    </Container>
  )
}
const Container = styled.main`
  display: flex;

  input {
    height: 65px;
    width: 429px;
    left: 956px;
    top: 317px;
    border-radius: 6px;
    margin-bottom: 13px;
    margin-left:9.53%;
    padding-left: 17px;
    border:none;
    ::placeholder {
      font-family: "Oswald";
      color: #9f9f9f;

      font-size: 27px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  button {
    height: 65px;
    width: 429px;
    left: 956px;
    top: 473px;
    border-radius: 6px;
    background-color: #1877f2;
    margin-top: 8px;
    margin-left:9.53%;
    margin-bottom:22px;
    border:none;
  }
  h2 {
  text-decoration: underline #FFFFFF;
    color: #ffffff;
   text-align:center;
   
  }
`;
const StyleForm = styled.section`
  width: 37.15%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyleDescription = styled.section`
  width: 62.85%;
  height: 100vh;
  background-color: #151515;
  padding-left: 15.91%;
  padding-right: 35.24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "Passion One";
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
  }
  h3 {
    font-family: "Oswald";
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    height: 128px;
    width: 502px;
    left: 144px;
    word-break: keep-all;
  }
`;
