import { useParams } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../header/Topbar.header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../../container/providers/auth";
import Post from "../post/Post";

function UserPage() {

    const { id } = useParams();
    const {token} = React.useContext(AuthContext)

    const [postsList, setPostList] = useState([]);
    const [infoUser, setInfoUser] = useState([]);
    const [userId, setUserId] = useState("");


    async function getPostsFromUserId(){
        try {
            const requisition = await axios.get(`http://localhost:4000/user/${id}/posts
            `,{
                headers:{
                    "authorization": `Bearer ${token}`
                }
            });
            setInfoUser(requisition.data)
            setPostList(requisition.data.posts)
            setUserId(requisition.data.id)

        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
        getPostsFromUserId();
    },[id]);

//{username, username_id, picture_url, id, link, description, likes}

    return (
        <>
            <Topbar/>
            <BodyLayout>
                <span>{`${infoUser.username}'s posts`}</span>
                <PostsBox>
                    {
                        postsList.map(post =>{
                            const {description, id, likes, link} = post
                        
                            return(
                                <Post   key={id}
                                        username_id={userId}
                                        picture_url={infoUser.picture_url}
                                        likes={likes}
                                        username={infoUser.username}
                                        description={description}
                                        link={link}
                                />
                            )
                        })
                    }
                </PostsBox>

            </BodyLayout>
        </>
    );
}

export default UserPage;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`

const PostsBox = styled.div`
    display: flex;
    flex-direction: column;
`