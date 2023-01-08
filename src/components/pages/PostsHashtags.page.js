import styled from "styled-components";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useEffect,useState} from "react";


export default function PostsHashtags() {
const [filterPosts, setFilterPosts] = useState([]);
  const { hashtag } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/hashtags?hashtag=${hashtag}`)
    .then((res)=> {
      setFilterPosts(res.data)
      console.log(res.data)
    })
    ;
  },[hashtag])
  return (<>
  {filterPosts.map((item)=> <h1>{item.description}</h1>)}
  </>)
}