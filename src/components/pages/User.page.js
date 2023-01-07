import { useParams } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../header/Topbar.header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../../container/providers/auth";

function UserPage() {

    const { id } = useParams();
    const {token} = React.useContext(AuthContext)

    const[postsList, setPostList] = useState([]);
    const[infoUser, setInfoUser] = useState([]);

    useEffect(()=>{
        async function getPostsFromUserId(){
            try {
                const requisition = await axios.get(`http://localhost:4000/user/${id}/posts
                `,{
                    headers:{
                        "authorization": `Bearer ${token}`
                    }
                });
                setInfoUser(requisition.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }
        getPostsFromUserId();
    },[id]);

    console.log(infoUser)


    return (
        <>
            <Topbar/>
            <BodyLayout>
                User Page
            </BodyLayout>
        </>
    );
}

export default UserPage;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`