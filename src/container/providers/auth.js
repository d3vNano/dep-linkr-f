import react from 'react';
import { useState } from 'react';

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
  const [userRegistration, setUserRegistration] = useState({email:"", password:"", username:"", picture_url:""});
const [userLogin, setUserLogin] = useState({email:"", password:""});
const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <AuthContext.Provider value={{userRegistration, setUserRegistration, token, setToken}}>
      {props.children}
    </AuthContext.Provider>
  )
}