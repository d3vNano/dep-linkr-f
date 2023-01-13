import { useParams } from "react-router-dom";
import { AuthContext } from "../../container/providers/auth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Topbar from "../header/Topbar.header";
import Post from "../commun/Post";
import Title from "../commun/Tittle";
import Hashtags from "../commun/Hashtag.commun";
import ButtonFollow from "../commun/ButtonFollow.js";

function UserPage() {
    const { id } = useParams();
    const { token, user_id } = React.useContext(AuthContext);

    const [postsList, setPostList] = useState([]);
    const [infoUser, setInfoUser] = useState({});
    const [userId, setUserId] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [followState, setFollowState] = useState(true);
    async function getPostsFromUserId() {
        try {
            const requisition = await axios.get(
                `${process.env.REACT_APP_HOST_URL}/user/${id}/posts
            `,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setInfoUser(requisition.data);
            setPostList(requisition.data.posts);
            setUserId(requisition.data.id);
        } catch (error) {
            alert(
                "An error occured while trying to fetch the posts, please refresh the page"
            );
            console.log(error.response.data);
        }
    }

    async function getFollowState() {
        try {
            const requisition = await axios.get(
                `${process.env.REACT_APP_HOST_URL}/follow/${user_id}/${id}`
            );

            setFollowState(requisition.data.followExists);
            console.log(requisition.data.followExists);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFollowState();
        getPostsFromUserId();
    }, [id]);

    return (
        <>
            <Topbar />
            <BodyLayout>
                <BodyBox>
                    {!infoUser.username ? (
                        <span>{`Loading...`}</span>
                    ) : (
                        <>
                            <Title
                                picture_url={infoUser.picture_url}
                                username={infoUser.username}
                            />
                            {id !== user_id && (
                                <ButtonFollow
                                    user_id={user_id}
                                    follow_user_id={id}
                                    setDisabled={setDisabled}
                                    disabled={disabled}
                                    followState={followState}
                                    setFollowState={setFollowState}
                                />
                            )}
                        </>
                    )}
                    <PostsBox>
                        {postsList.length === 0 && infoUser.username ? (
                            <span>{`There are no posts yet`}</span>
                        ) : (
                            postsList.map((post) => {
                                const { description, id, likes, link } = post;
                                return (
                                    <Post
                                        key={id}
                                        username_id={userId}
                                        picture_url={infoUser.picture_url}
                                        likes={likes}
                                        username={infoUser.username}
                                        description={description}
                                        link={link}
                                    />
                                );
                            })
                        )}
                    </PostsBox>
                </BodyBox>
                <HashtagsBox>
                    <Hashtags />
                </HashtagsBox>
            </BodyLayout>
        </>
    );
}

export default UserPage;

const BodyLayout = styled.div`
    width: 100%;
    margin: 72px 25px 70px 25px;
    display: flex;
    justify-content: center;

    @media (max-width: 550px) {
        margin: 72px 0 0 0;
    }
`;
const BodyBox = styled.div`
    width: 100%;
    max-width: 611px;
    min-width: 375px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 53px;
`;

const PostsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HashtagsBox = styled.div`
    width: 100%;
    max-width: 301px;
    height: 406px;

    background-color: black;
    margin-left: 25px;
    margin-top: 160px;
    background-color: #171717;
    border-radius: 16px;

    @media (max-width: 650px) {
        display: none;
    }
`;
