import axios from "axios";
import styled from "styled-components";
import { SlPaperPlane } from "react-icons/sl";
import { useState } from "react";

import AllComments from "./AllComments";

function CommentsBody({ user_id, post_id, follow_state, picture_url }) {
    const [sendComment, setSendComment] = useState({
        comment: "",
        user_id,
        post_id,
        follow_state,
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setSendComment({
            comment: "",
            user_id,
            post_id,
            follow_state,
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post(`${process.env.REACT_APP_HOST_URL}/comment`, sendComment)
            .then((ans) => {
                document.location.reload(true);
            })
            .catch((err) => {
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Body>
            {false && <AllComments />}
            <SendComment onSubmit={submitForm}>
                <Avatar src={picture_url} />
                <Comment
                    name="comment"
                    type="text"
                    placeholder="write a comment..."
                    value={sendComment.comment}
                    onChange={(e) =>
                        setSendComment({
                            ...sendComment,
                            comment: e.target.value,
                        })
                    }
                    disabled={disabled}
                    required
                />
                <SendButton disabled={disabled}>
                    <SlPaperPlane />
                </SendButton>
            </SendComment>
        </Body>
    );
}

export default CommentsBody;

const Body = styled.div`
    width: 100%;
    padding: 15px 30px 30px 30px;

    display: flex;
    flex-direction: column;

    background-color: #1e1e1e;
    border-radius: 0 0 15px 15px;
`;

const SendComment = styled.form`
    width: 100%;

    display: flex;
    position: relative;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;

    border-radius: 100%;
`;

const Comment = styled.input`
    width: 100%;
    padding-left: 10px;
    padding-right: 55px;

    display: flex;
    position: relative;

    outline: none;
    border: none;
    border-radius: 12px;
    background-color: #252525;

    font-size: 16px;
    font-style: italic;
    color: #fff;

    ::placeholder {
        color: #575757;
    }
`;

const SendButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    display: flex;
    position: absolute;
    top: 14px;
    right: 15px;

    svg {
        font-size: 20px;
        color: white;
    }
`;
