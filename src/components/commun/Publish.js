import axios from "axios";
import styled from "styled-components";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../container/providers/auth";

function Publish() {
    const { user_id, picture_url } = React.useContext(AuthContext);

    const [post, setPost] = useState({
        link: "",
        description: "",
    });


    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setPost({
            link: "",
            description: "",
        });
    }



    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post(`${process.env.REACT_APP_HOST_URL}/post`, {...post, user_id:user_id})
            .then((ans) => {
                
                document.location.reload(true);
            })
            .catch((err) => {
                clearInputs();
                console.log(err)
                console.log(post)
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Picture src={picture_url} />
            <Form onSubmit={submitForm}>
                <Title>Whats are you going to share today?</Title>
                <Send>
                    <InputLink
                        name="link"
                        type="text"
                        placeholder="http://..."
                        value={post.link}
                        onChange={(e) =>
                            setPost({ ...post, link: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <InputDesc
                        name="description"
                        type="text"
                        placeholder="Awesome article about #javascript"
                        value={post.description}
                        onChange={(e) =>
                            setPost({ ...post, description: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Button disabled={disabled}>Publish</Button>
                </Send>
            </Form>
        </Screen>
    );
}

export default Publish;

const Screen = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;

    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
`;

const Picture = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;

    border-radius: 100%;
    object-fit: cover;
`;

const Form = styled.form`
    width: 100%;
    margin-top: 5px;
    padding-right: 10px;

    color: #707070;
`;

const Title = styled.h1`
    margin-bottom: 15px;

    font-size: 20px;
    font-weight: 300;
`;

const Send = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const InputLink = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    padding-left: 10px;

    border: none;
    outline-color: #949494;
    background-color: #efefef;

    ::placeholder {
        color: #949494;
    }
`;

const InputDesc = styled.textarea`
    width: 100%;
    height: 65px;
    margin-bottom: 5px;
    padding-left: 10px;

    border: none;
    outline-color: #949494;
    background-color: #efefef;

    resize: none;

    ::placeholder {
        color: #949494;
    }
`;

const Button = styled.button`
    width: 112px;
    height: 31px;

    color: #fff;

    border: none;
    border-radius: 5px;
    background-color: #1877f2;
`;
