import axios from "axios";
import styled from "styled-components";
import { SlPaperPlane } from "react-icons/sl";

import AllComments from "./AllComments";
import { getAllComments } from "../functions/getAllComments";
import { getFollowState } from "../functions/getFollowState";
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../container/providers/auth";

function CommentsBody({ post_id, author_id }) {
    const { user_id, picture_url } = useContext(AuthContext);
    const [sendComment, setSendComment] = useState({
        comment: "",
        user_id,
        post_id,
    });

    const [disabled, setDisabled] = useState(false);

    const [infoComments, setInfoComments] = useState([]);

    async function getAllComments(post_id, user_id) {
        try {
            const requisition = await axios.get(
                `${process.env.REACT_APP_HOST_URL}/comments/${post_id}/${user_id}`
            );
            setInfoComments(requisition.data.comments);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getAllComments(post_id, user_id);
    }, []);

    function clearInputs() {
        setSendComment({
            comment: "",
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
            {true &&
                infoComments.map((value, index) => {
                    const {
                        id,
                        comment_user_id,
                        comment_text,
                        comment_username,
                        comment_picture_url,
                        follower,
                    } = value;

                    return (
                        <AllComments
                            key={index}
                            comment_id={id}
                            comment_user_id={comment_user_id}
                            comment_username={comment_username}
                            comment_picture_url={comment_picture_url}
                            comment_text={comment_text}
                            follower={follower}
                            author_id={author_id}
                            user_id={user_id}
                        />
                    );
                })}
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
