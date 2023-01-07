import Topbar from "../header/Topbar.header";
import styled from "styled-components";
import Title from "../commun/Tittle";
import { useParams } from "react-router-dom";

function Hashtags() {
    const { hashtag } = useParams();

    return (
        <>
            <Topbar/>
            <BodyLayout>
                <Title title={`# ${hashtag}`}/>              
            </BodyLayout>
        </>
    );
}

export default Hashtags;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`