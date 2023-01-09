import styled from "styled-components";
import React from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({username, username_id, picture_url, id, link, description, likes}){
    const navigate = useNavigate();
    return(
        <PostBox key={id}>
            <PopularityBox username_id={username_id}>
                <img src={picture_url} alt={`picture of ${username}`}
                    onClick={() => navigate(`/user/${username_id}`)}
                ></img>
                <div>{likes}</div>
            </PopularityBox>
            <InfosBox>
                <span onClick={() => navigate(`/user/${username_id}`)}>{username}</span>
                <ReactTagify 
                    tagClicked={(tag)=> navigate(`/hashtag/${tag.replace("#","")}`)}>
                    <DescriptionBox>{description}</DescriptionBox>
                </ReactTagify>
                <LinkBox>{link}</LinkBox>
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

`

const PopularityBox = styled.div`
    display: flex;
    flex-direction: column;

    img{
        width: 50px;
        height: 50px;
    
        border-radius: 26.5px;
        margin: 0px 15px 15px 0px;
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
`

const DescriptionBox = styled.div`
    
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;
`

const LinkBox = styled.div`
    width: 100%;
    height: 155px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;
`