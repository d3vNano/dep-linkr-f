import React, { useEffect, useState } from "react";
import { AuthContext } from "../../container/providers/auth";
import axios from "axios";
import styled from "styled-components";

import Topbar from "../header/Topbar.header";
import Title from "../commun/Tittle";

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
            setPostList(requisition.response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(()=>{
        getPostsList()
    },[])

    console.log(postsList)
    return (
        <>
            <Topbar/>
            <BodyLayout>
                <Title title={`Timeline`}/>              
            </BodyLayout>
        </>
    );
}

export default Timeline;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`