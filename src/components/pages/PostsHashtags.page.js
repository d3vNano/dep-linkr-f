import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Topbar from "../header/Topbar.header";
import Title from "../commun/Tittle";
import Post from "../commun/Post";

export default function PostsHashtags() {
  const [filterPosts, setFilterPosts] = useState([]);
  const { hashtag } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/hashtags?hashtag=${hashtag}`)
      .then((res) => {
        setFilterPosts(res.data);
        console.log(res.data);
      });
  }, []);
  console.log(filterPosts, "aa");
  return (
    <>
      <Topbar/>
        <BodyLayout>
          <BodyBox>
            <Title username={hashtag} title={`#${hashtag}`}></Title>
           
            <PostsBox>
              {filterPosts.map((f) => {
                const { id, link, description, user_id, likes , picture_url,username} = f;
                return (
                  
                  <Post
                    key={id}
                    username_id={user_id}
                    picture_url={picture_url}
                    likes={likes}
                    username={username}
                    description={description}
                    link={link}
                  />
                  );
              
              })}
            </PostsBox>
          </BodyBox>
        </BodyLayout>
    </>
  );
}
const BodyLayout = styled.div`
  width: 100%;
  margin: 72px 25px 70px 25px;
  display: flex;
  justify-content: center;

  @media (max-width: 550px) {
    margin: 72px 0 0 0;
  }
`;
const BodyBox = styled.div`
  width: 100%;
  max-width: 611px;
  min-width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 53px;
`;

const PostsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HashtagsBox = styled.div`
  width: 100%;
  max-width: 301px;
  height: 406px;
  background-color: black;
  margin-left: 25px;
  margin-top: 160px;

  @media (max-width: 650px) {
    display: none;
  }
`;
