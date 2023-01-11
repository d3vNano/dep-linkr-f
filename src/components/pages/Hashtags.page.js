import Topbar from "../header/Topbar.header";
import styled from "styled-components";
import Title from "../commun/Tittle";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

//componente hashtag, renderizar na Timeline
export default function Hashtags() {
    const [filterPosts, setFilterPosts] = useState([]);
    const { hashtag } = useParams();
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_HOST_URL}/hashtags?hashtag=${hashtag}`
            )
            .then((res) => {
                setFilterPosts(res.data);
                console.log(res.data);
            });
    }, [hashtag]);
    console.log(hashtag, "aa");
    return (
        <>
            <h1>Oi</h1>
        </>
    );
}
