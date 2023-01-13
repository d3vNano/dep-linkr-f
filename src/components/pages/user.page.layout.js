import { useParams } from "react-router-dom";
import { AuthContext } from "../../container/providers/auth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Topbar from "../header/Topbar.header";
import Post from "../commun/Post";
import Title from "../commun/Tittle";
import Hashtags from "../commun/Hashtag.commun";

function UserPage() {
    const { id } = useParams();
    const { token } = React.useContext(AuthContext);

    const [postsList, setPostList] = useState([]);
    const [infoUser, setInfoUser] = useState({});
    const [userId, setUserId] = useState("");

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

    useEffect(() => {
        getPostsFromUserId();
    }, [id]);

    return (
        <>
            <Topbar />
            <BodyLayout>
                {!infoUser.username ? (
                    <div className="loading"><span>{`Loading...`}</span></div>
                    
                ) : (
                    <TitleBox>
                    <Title
                        picture_url={infoUser.picture_url}
                        username={infoUser.username}
                    />
                    <div className="button">Follow</div>
                    </TitleBox>
                )}
                <BodyBox2>
                    <BodyBox>
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
                </BodyBox2>
            </BodyLayout>
        </>
    );
}

export default UserPage;

const BodyLayout = styled.div`
    width: 100%;
    margin: 72px 25px 70px 25px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    .loading{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;

        span{
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 43px;
            line-height: 64px;

            color: #FFFFFF;
        }
    }

    @media (max-width: 650px) {
        margin: 144px 0 0 0;
    }
`;
const TitleBox =styled.div`
    display: flex;
    align-items: center;

    .button{
        width: 112px;
        height: 31px;
        margin: 0 15px;

        display:flex;
        align-items: center;
        justify-content: center;

        background: #1877F2;
        border-radius: 5px;
    }
`

const BodyBox2 = styled.div`
    margin-top: 53px;
    max-width:937px;
    
    background-color:yellow;
    display:flex;
    justify-content: space-between;
`
const BodyBox = styled.div`
    width: 100%;
    max-width: 611px;
    min-width: 375px;

    display: flex;
    align-items: center;
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
    background-color: #171717;
    border-radius: 16px;

    @media (max-width: 650px) {
        display: none;
    }
`;
