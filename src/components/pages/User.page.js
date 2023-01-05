import styled from "styled-components";
import Topbar from "../header/Topbar.header";

function UserPage() {
    return (
        <>
            <Topbar/>
            <BodyLayout>
                User Page
            </BodyLayout>
        </>
    );
}

export default UserPage;

const BodyLayout = styled.div`
    width:100%;
    margin: 90px auto auto auto;
`