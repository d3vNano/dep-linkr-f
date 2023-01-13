import React, { useEffect, useState } from "react";
import { AuthContext } from "../../container/providers/auth";
import axios from "axios";
import styled from "styled-components";
import Hashtags from "../commun/Hashtag.commun";
import Topbar from "../header/Topbar.header";
import Title from "../commun/Tittle";
import Post from "../commun/Post";
import Publish from "../commun/Publish";

function Timeline() {
    const { token } = React.useContext(AuthContext);
    const [postsList, setPostList] = useState([]);
    const [countLike, setCountLike] = useState(0);

    async function getPostsList() {
        try {
            const requisition = await axios.get(
                `${process.env.REACT_APP_HOST_URL}/timeline`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setPostList(requisition.data);
        } catch (error) {
            alert(
                "An error occured while trying to fetch the posts, please refresh the page"
            );
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        getPostsList();
    }, []);

    return (
        <>
            <Topbar />
            <BodyLayout>
                <BodyBox>
                    <Title title={`Timeline`} />
                    <PublishBox>
                        <Publish />
                    </PublishBox>
                    <PostsBox>
                        {postsList.length > 0 ? (
                            postsList.map((post) => {
                                const {
                                    metaUrl,
                                    metaTitle,
                                    metaDescription,
                                    metaImage,
                                    id,
                                    link,
                                    description,
                                    user_id,
                                    likes,
                                    username,
                                    picture_url,
                                } = post;

                                return (
                                    <Post
                                        key={id}
                                        username_id={user_id}
                                        picture_url={picture_url}
                                        likes={likes}
                                        username={username}
                                        description={description}
                                        link={link}
                                        metaUrl={metaUrl}
                                        metaTitle={metaTitle}
                                        metaDescription={metaDescription}
                                        metaImage={metaImage}
                                        post_id={id}
                                    />
                                );
                            })
                        ) : (
                            <span>{`Loading...`}</span>
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

export default Timeline;

const BodyLayout = styled.div`
    width: 100%;
    margin: 72px 25px 70px 25px;
    display: flex;
    justify-content: center;
    cursor: default;

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

    span {
        color: white;
    }
`;

const PublishBox = styled.div`
    width: 100%;
    height: 209px;
    margin-bottom: 29px;

    display: flex;
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
