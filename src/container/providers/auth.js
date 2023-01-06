import react from 'react';
import { useState } from 'react';

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
  const [userRegistration, setUserRegistration] = useState({email:"", password:"", username:"", picture_url:""});
  const [username, setusername] = useState(localStorage.getItem("username"));
  const [picture_url, setPicture_url] = useState(localStorage.getItem("picture_url"));
  const [token, setToken] = useState(localStorage.getItem("token"));
const [userLogin, setUserLogin] = useState({email:"", password:""});
console.log(username, picture_url);

  return (
    <AuthContext.Provider value={{username, setusername,picture_url, setPicture_url,userLogin, setUserLogin,userRegistration, setUserRegistration, token, setToken}}>
      {props.children}
    </AuthContext.Provider>
  )
}