import Topbar from "../header/Topbar.header";
import styled from "styled-components";
import Title from "../commun/Tittle";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

//componente hashtag, renderizar na Timeline
function Hashtags() {
    const [hashtags, setHashtags] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/hashtags`)
        .then((res)=> {
            setHashtags(res.data)
console.log(res.data)
        })
        ;
    },[])



    return (
        <>
            <Topbar/>
            <BodyLayout>
                {hashtags.map((h) => (
                    <Link to={`/hashtag/${h.name}`} key={h.id}>
                        <h2>{h.name}</h2>
                    </Link>
                ))}

                    
                                  
            </BodyLayout>
        </>
    );
}

export default Hashtags;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`