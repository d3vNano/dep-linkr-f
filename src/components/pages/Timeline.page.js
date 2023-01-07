import Topbar from "../header/Topbar.header";
import styled from "styled-components";

function Timeline() {
    return (
        <>
            <Topbar/>
            <BodyLayout>
                Timeline/Home Page
            </BodyLayout>
        </>
    );
}

export default Timeline;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`