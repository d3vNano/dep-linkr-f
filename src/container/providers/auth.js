import react from "react";
import { useState } from "react";

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [userRegistration, setUserRegistration] = useState({
        email: "",
        password: "",
        username: "",
        picture_url: "",
    });
    const [username, setusername] = useState(localStorage.getItem("username"));
    const [user_id, setUser_id] = useState(localStorage.getItem("user_id"));
    const [picture_url, setPicture_url] = useState(
        localStorage.getItem("picture_url")
    );

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });

    return (
        <AuthContext.Provider
            value={{
                user_id,
                setUser_id,
                username,
                setusername,
                picture_url,
                setPicture_url,
                userLogin,
                setUserLogin,
                userRegistration,
                setUserRegistration,
                token,
                setToken,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
