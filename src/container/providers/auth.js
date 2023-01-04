import react from 'react';
import { useState } from 'react';

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
  const [userRegistration, setUserRegistration] = useState({email:"", password:"", username:"", picture_url:""});

  return (
    <AuthContext.Provider value={{userRegistration, setUserRegistration}}>
      {props.children}
    </AuthContext.Provider>
  )
}