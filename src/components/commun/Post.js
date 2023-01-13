import axios from "axios";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { SlHeart } from "react-icons/sl";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../container/providers/auth";

import CommentsBody from "./CommentsBody";

export default function Post({
    metaUrl,
    metaTitle,
    metaDescription,
    metaImage,
    username,
    username_id,
    picture_url,
    key,
    post_id,
    link,
    description,
    likes,
}) {
    const navigate = useNavigate();

    return (
        <PostBox key={key}>
            <PostBody>
                <PopularityBox username_id={username_id}>
                    <img
                        src={picture_url}
                        alt={`picture of ${username}`}
                        onClick={() => navigate(`/user/${username_id}`)}
                    ></img>
                    <SlHeart />
                    <div>{likes}</div>
                </PopularityBox>
                <InfosBox>
                    <span
                        className="username"
                        onClick={() => navigate(`/user/${username_id}`)}
                    >
                        {username}
                    </span>
                    <ReactTagify
                        colors={"white"}
                        font-weight={"bolder"}
                        tagClicked={(tag) =>
                            navigate(`/hashtag/${tag.replace("#", "")}`)
                        }
                    >
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
            </PostBody>
            <CommentsBody author_id={username_id} post_id={post_id} />
        </PostBox>
    );
}

const PostBox = styled.div`
    width: 100%;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background-color: #1e1e1e;

    border-radius: 16px;
`;

const PostBody = styled.div`
    width: 100%;
    padding: 20px;

    display: flex;
    border-radius: 15px 15px 20px 20px;

    background: #171717;
`;

const PopularityBox = styled.div`
    display: flex;
    flex-direction: column;
    cursor: default;

    img {
        width: 50px;
        height: 50px;

        border-radius: 26.5px;
        margin: 0px 15px 15px 0px;
        cursor: pointer;
    }
    svg {
        border-width: 30px;
        margin: 0px 0px 5px 17px;
    }
    div {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
    }
`;

const InfosBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
        margin-bottom: 6px;

        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
    }
    .username {
        cursor: pointer;
    }
`;

const DescriptionBox = styled.div`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    cursor: default;

    color: #b7b7b7;
`;

const LinkBox = styled.div`
    width: 100%;
    height: 155px;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    display: flex;
    cursor: pointer;

    img {
        height: 155px;
        width: 30%;
        border-radius: 5px;
        margin-right: 0;
    }
`;
const Metadata = styled.div`
    width: 70%;
    height: 100%;
`;
