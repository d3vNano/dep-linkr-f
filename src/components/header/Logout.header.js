import react, { useState } from "react";
import styled from "styled-components"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import { AuthContext } from "../../container/providers/auth"
import { useNavigate } from "react-router-dom";

export default function Logout ({logoutIsOpen, setLogoutIsOpen}){
    const {setusername, setPicture_url, username, picture_url, setToken, setUser_id} = react.useContext(AuthContext);

const navigate = useNavigate();

function logout(){
    setToken("");
    setusername("");
    setPicture_url("");
    setUser_id("");
    localStorage.clear();
    navigate("/");
}
    return (
        <LogoutLayout onClick={()=> setLogoutIsOpen(!logoutIsOpen)}> 
        {logoutIsOpen ?
        <SlArrowUp/>:
            <SlArrowDown/>
        } 
            <img src={picture_url} alt={`picture of ${username}`}></img>
               {logoutIsOpen && <Popup onClick={logout}>Logout</Popup>}
        </LogoutLayout>
    )
}
const Popup = styled.div`
width: 140px;
height: 47px;
background: #171717;
border-radius: 0px 0px 0px 20px;
overflow:hidden;
position:absolute;
top:67px;
right:0px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 17px;
letter-spacing: 0.05em;
color: #FFFFFF;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
const LogoutLayout = styled.div`
position:relative;
    width:90px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;

    svg {
        width: 18.38px;
        height: 12.38px;
    }
    
    img {
        width: 53px;
        height: 53px;

        border-radius: 26.5px;
        margin: 5px;
    }
`