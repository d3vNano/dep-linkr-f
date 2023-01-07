import styled from "styled-components";
import { Link } from "react-router-dom";
import Logout from "./Logout.header";
import SearchBar from "./SearchBar.header";



function Topbar (){
    return (
        <HeaderLayout>          
            <LogoLayout>
                <Link to={"/timeline"}>linkr</Link>
            </LogoLayout>
            <SearchBar/>
            <Logout/>
        </HeaderLayout>
    )
}

export default Topbar

const HeaderLayout = styled.div `
    position: fixed;
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
        width: 108px;
        height: 54px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;

        text-decoration:none;

        color: #FFFFFF;
    }
`