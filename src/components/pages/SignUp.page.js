import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [userRegistration, setUserRegistration] = useState({
        email: "",
        password: "",
        username: "",
        picture_url: "",
    });
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    function handleSignUp(e) {
        setUserRegistration({
            ...userRegistration,
            [e.target.name]: e.target.value,
        });
    }

    function signUpApp(e) {
        e.preventDefault();
    }

    function registration() {
        const URL = `${process.env.REACT_APP_HOST_URL}/signup`;
        setDisable(true);
        const promise = axios.post(URL, userRegistration);
        promise.then((res) => {
            setDisable(false);
            alert("Congratulations, account created successfully!");
            navigate("/");
        });
        promise.catch((err) => {
            setDisable(false);
            alert(err.response.data.message);
            console.log(err.response);
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
                    {disable ? (
                        <button className="Loading...">
                            <h2>{`Loading...`}</h2>
                        </button>
                    ) : (
                        <button
                            onClick={registration}
                            type="submit"
                            disabled={disable}
                        >
                            <h2>Sign Up</h2>
                        </button>
                    )}
                </form>

                <Link to="/">
                    <h2>Switch back to log in</h2>
                </Link>
            </StyleForm>
        </Container>
    );
}
const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: red;

    display: flex;
    justify-content: flex-end;

    font-style: normal;
    font-weight: 700;

    background-color: #151515;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;
const StyleDescription = styled.div`
    width: 62.85%;
    margin-left: 10%;
    padding-top: 29vh;
    padding-right: 20px;

    display: flex;
    flex-direction: column;

    background-color: #151515;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

    h1 {
        font-family: "Passion One";
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
    }

    h3 {
        max-width: 442px;
        font-family: "Oswald";
        font-size: 43px;
        line-height: 64px;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 89px;
            line-height: 100px;
        }
        h3 {
            font-size: 33px;
            line-height: 49px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        margin-left: 0;
        padding: 27px;

        display: flex;
        align-items: center;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        h1 {
            font-size: 76px;
            line-height: 84px;
        }
        h3 {
            max-width: 237px;
            font-size: 23px;
            line-height: 34px;
            text-align: center;
        }
    }
`;
const StyleForm = styled.div`
    width: 37.15%;
    min-width: 230px;
    max-width: 535px;
    padding-top: 31vh;
    padding: 26vh 3.4%;

    background-color: #333333;

    form {
        width: 100%;
        max-width: 429px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        height: 65px;
        max-width: 429px;
        width: 100%;

        margin-bottom: 13px;
        border-radius: 6px;

        border: none;
        background: #ffffff;

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

    h2 {
        text-decoration: underline #ffffff;
        text-align: center;

        font-family: "Lato";
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #ffffff;
    }

    button {
        height: 65px;
        width: 100%;
        max-width: 429px;
        margin-bottom: 13px;
        border-radius: 6px;
        border: none;
        background-color: #1877f2;

        h2 {
            font-family: "Oswald";
            color: #ffffff;
            font-size: 27px;
            line-height: 40px;
            text-decoration: none;
        }
    }

    @media (max-width: 600px) {
        height: 100vh;
        width: 100%;
        max-width: 100%;
        padding: 40px 6.8%;
    }
`;
