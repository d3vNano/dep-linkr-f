import styled from "styled-components";
import React from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import {SlHeart} from "react-icons/sl";

export default function Post({metaUrl, metaTitle, metaDescription, metaImage,username, username_id, picture_url, id, link, description, likes}){
    const navigate = useNavigate();
    return(
        <PostBox key={id}>
            <PopularityBox username_id={username_id}>
                <img src={picture_url} alt={`picture of ${username}`}
                    onClick={() => navigate(`/user/${username_id}`)}
                ></img>
                <SlHeart/>
                <div>{likes}</div>
            </PopularityBox>
            <InfosBox>
                <span  className="username" onClick={() => navigate(`/user/${username_id}`)}>{username}</span>
                <ReactTagify colors={"white"} font-weight={"bolder"}
                    tagClicked={(tag)=> navigate(`/hashtag/${tag.replace("#","")}`)}>
                    <DescriptionBox>{description}</DescriptionBox>
                </ReactTagify>
                <LinkBox>
<Metadata><h2>{metaTitle}</h2>
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
        margin: 0px 0px 5px 17px;
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