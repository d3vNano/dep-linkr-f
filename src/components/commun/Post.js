import styled from "styled-components";
import React, { useState } from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import axios from "axios";
import react from "react";
import { AuthContext } from "../../container/providers/auth";

export default function Post({  getPostsList,count, isLiked,metaUrl, 
                                metaTitle, metaDescription, metaImage, 
                                username, username_id, 
                                picture_url, id, link, 
                                description, likes
                            }){

    const {user_id} = react.useContext(AuthContext);
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const likePost ={  user_id: user_id,
                       post_id: id,  
                    };

    function likes() {
        const URL = `${process.env.REACT_APP_HOST_URL}/likes`;
        const promise = axios.post(URL, likePost);
        promise.then((res) => {
            setLike(!like);
            getPostsList();
            
        });
        promise.catch((err) => {
            console.log(err.response);
        });
    }
    return(
        <PostBox key={id}>
            <PopularityBox username_id={username_id}>
                <img src={picture_url} alt={`picture of ${username}`}
                    onClick={() => navigate(`/user/${username_id}`)}
                ></img>
                {isLiked === false ?
                <AiOutlineHeart onClick={likes} color={"#FFFFFF"}/> :
                <AiFillHeart onClick={likes} color={"#AC0000"}/>}
                <div>{count}</div>
            </PopularityBox>
            <InfosBox>
                <span  className="username" onClick={() => navigate(`/user/${username_id}`)}>
                    {username}
                </span>
                <ReactTagify colors={"white"} font-weight={"bolder"}
                    tagClicked={(tag)=> navigate(`/hashtag/${tag.replace("#","")}`)}>
                    <DescriptionBox>{description}</DescriptionBox>
                </ReactTagify>
                <LinkBox>
                    <Metadata>
                        <h2>{metaTitle}</h2>
                        <h4>{metaDescription}</h4>
                        <h4>{metaUrl}</h4>
                    </Metadata>
                    <img src={metaImage} alt={""}></img>
                </LinkBox>
            </InfosBox>
        </PostBox>
    )

}

const PostBox = styled.div`
    width:100%;

    display:flex;
    align-items: flex-start;

    padding:15px;
    margin-bottom:15px;
    background: #171717;
    border-radius:10px;

`

const PopularityBox = styled.div`
    display: flex;
    flex-direction: column;
    cursor:default;

    img{
        width: 50px;
        height: 50px;
    
        border-radius: 26.5px;
        margin: 0px 15px 15px 0px;
        cursor: pointer;
    }
    svg{
        border-width:30px;
        margin: 0px 0px 5px 12px;
        font-size:30px;
        cursor:pointer;
    }
    div{
        width: 50px;
        height: 50px;

        display:flex;
        justify-content: center;
    }
`

const InfosBox = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;

    span{
        margin-bottom:6px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
    }
    .username{
        cursor: pointer;
    }
`

const DescriptionBox = styled.div`
    
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    cursor:default;

    color: #B7B7B7;
`

const LinkBox = styled.div`
    width: 100%;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
display:flex;
    cursor: pointer;


    img{
        height: 155px;
width: 30%;
border-radius:5px;
margin-right:0;
    }
`
const Metadata = styled.div`
width: 70%;
height:100%;
`
