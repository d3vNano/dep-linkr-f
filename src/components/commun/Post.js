import styled from "styled-components";
import React from "react";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({username, username_id, picture_url, id, link, description, likes}){
    const navigate = useNavigate();
    
    return(
        <PostBox key={id}>
            <PopularityBox username_id={username_id}>
            <IconImage src={picture_url} alt={`picture of ${username}`}></IconImage>
            <div>{likes}</div>
            </PopularityBox>
            <InfosBox>
                <span>{username}</span>

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
    width: 611px;
    height: 276px;

    background: #171717;

`

const PopularityBox = styled.div`
    display: flex;
    flex-direction: column;
`

const IconImage = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 26.5px;
    margin: 5px;
`

const InfosBox = styled.div`
    display:flex;
    flex-direction: column;
`

const DescriptionBox = styled.div`
    height: 52px;
`

const LinkBox = styled.div`
    height: 155px;
`