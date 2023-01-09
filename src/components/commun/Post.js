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

                <img src=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" alt={"Picture Url"}></img>

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
height:100%;
width:70%;
border-radius:5px;
display:flex;
flex-direction:column;

justify-content:space-around;
h2{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #CECECE;

}
h4{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: #9B9595;

}
`

