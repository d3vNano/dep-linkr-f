import styled from "styled-components";
import { Link } from "react-router-dom";
import Logout from "./Logout.header";
import SearchBar from "./SearchBar.header";
import { useState } from "react";
function Topbar (){
const [logoutIsOpen, setLogoutIsOpen] = useState(false);
    return (
        <HeaderLayout onClick={()=> logoutIsOpen && setLogoutIsOpen(false)}>
            <LogoLayout>
                <Link to={"/timeline"}>linkr</Link>
            </LogoLayout>
            <SearchBar/>
            <Logout logoutIsOpen={logoutIsOpen} setLogoutIsOpen={setLogoutIsOpen}/>
        </HeaderLayout>
    )
}

export default Topbar

const HeaderLayout = styled.div `
    position: absolute;
    width: 100%;
    height: 72px;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #151515;
`
const LogoLayout = styled.div`
    a{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;

        text-decoration:none;

        color: #FFFFFF;
    }
`