import React, { useEffect, useState } from "react";
import { AuthContext } from "../../container/providers/auth";
import axios from "axios";
import styled from "styled-components";

import Topbar from "../header/Topbar.header";
import Title from "../commun/Tittle";
import Post from "../commun/Post";

function Timeline() {

    const {token} = React.useContext(AuthContext);

    const [postsList, setPostList] = useState([]);

    async function getPostsList(){
        try {
            const requisition= await axios.get(`http://localhost:4000/timeline
            `,{
                headers:{
                    "authorization": `Bearer ${token}`
                }
            });
            setPostList(requisition.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
        getPostsList()
    },[])

    return (
        <>
            <Topbar/>
            <BodyLayout>
                <Title title={`Timeline`}/>
                <PostsBox>
                    {
                        postsList.map(post => {
                            const {id, link, description, user_id, likes, username, picture_url} = post

                            return(
                                <Post   key={id}
                                        username_id={user_id}
                                        picture_url={picture_url}
                                        likes={likes}
                                        username={username}
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

export default Timeline;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`
const PostsBox = styled.div`
    display: flex;
    flex-direction: column;
`