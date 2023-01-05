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
    <>
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
    </>
  )
}
