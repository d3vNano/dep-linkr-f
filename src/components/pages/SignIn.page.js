import { Link } from "react-router-dom";
import styled from "styled-components";
import react from "react";
import { AuthContext } from "../../container/providers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
    const {
        setUser_id,
        setToken,
        setusername,
        setPicture_url,
        userLogin,
        setUserLogin,
    } = react.useContext(AuthContext);
    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();

    function handleSignIn(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }
    function loginApp(e) {
        e.preventDefault();
    }

    function login() {
        const URL = "https://linkr-back-hll5.onrender.com/signin";
        setDisable(true);
        const promise = axios.post(URL, userLogin);
        promise.then((res) => {
            setDisable(false);
            setUser_id(res.data.user_id);
            setToken(res.data.token);
            setusername(res.data.username);
            setPicture_url(res.data.picture_url);
            navigate("/timeline");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("picture_url", res.data.picture_url);
            localStorage.setItem("user_id", res.data.user_id);
        });

        promise.catch((err) => {
            setDisable(false);
            console.log(err);
            //alert(err.response.data.message);
        });
    }
    return (
        <Container>
            <StyleDescription>
                <h1>linkr</h1>
                <h3>save, share and discover the best links on the web</h3>
            </StyleDescription>
            <StyleForm>
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
            </StyleForm>
        </Container>
    );
}
const Container = styled.main`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: space-between;

    background-color: #151515;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 23px;

        max-width: 429px;
        width: 100%;
    }

    input {
        height: 65px;
        width: 100%;
        max-width: 429px;
        border-radius: 6px;
        margin-bottom: 13px;
        padding-left: 17px;
        border: none;
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
        width: 100%;
        max-width: 429px;
        border-radius: 6px;
        background-color: #1877f2;
        margin: 0 auto 13px auto;
        border: none;
    }

    h2 {
        text-decoration: underline #ffffff;
        color: #ffffff;
        text-align: center;
    }

    h3 {
        width: 442px;
        height: 128px;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: flex-start;

        h3 {
            font-family: Oswald;

            font-family: "Oswald";
            width: 237px;
            height: 68px;
            font-size: 23px;
            font-weight: 700;
            line-height: 34px;
            letter-spacing: 0em;
            text-align: center;
        }
        h1 {
            margin-top: 10px;
        }

        form {
            margin-top: 0;
        }
    }
`;
const StyleForm = styled.section`
    width: 37.15%;
    max-width: 535px;

    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 23px;

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        max-width: 100%;
    }
`;
const StyleDescription = styled.section`
    width: 62.85%;

    background-color: blue;
    background-color: #151515;
    margin-left: 144px;
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
        text-align: center;
        height: 128px;
        width: 502px;
        //left: 144px;
        word-break: keep-all;
    }

    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        align-content: center;
        align-items: center;
        margin-left: 0px;
    }
`;
