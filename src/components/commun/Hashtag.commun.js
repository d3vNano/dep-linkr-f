import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

//componente hashtag, renderizar na Timeline
function Hashtags() {
    const [hashtags, setHashtags] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST_URL}/hashtags`).then((res) => {
            setHashtags(res.data);
        });
    }, []);

    return (
        <>
            <HashtagsBox>
                <div className="titleTrending">
                    <h6>trending</h6>
                </div>
                <div className="hashtagsList">
                    {hashtags.map((h) => (
                        <Link to={`/hashtag/${h.name}`} key={h.id}>
                            <h2>{`# ${h.name}`}</h2>
                        </Link>
                    ))}
                </div>
            </HashtagsBox>
        </>
    );
}

export default Hashtags;

const HashtagsBox = styled.div`
    cursor: default;

    .titleTrending {
        border-bottom: 1px solid #484848;
    }

    h6 {
        margin: 9px auto 12px 16px;
        font-family: "Oswald";
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
    }
    .hashtagsList {
        height: 100%;
        max-height: 293px;
        margin-left: 16px;
        margin-top: 15px;
        //lembrar de adicionar a barra de scroll bonitinha depois
    }
    a {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 30px;

        letter-spacing: 0.05em;

        color: #ffffff;
        text-decoration: none;
    }
`;
