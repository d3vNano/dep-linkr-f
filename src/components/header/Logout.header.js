import react from "react";
import styled from "styled-components"
import { SlArrowDown } from "react-icons/sl"
import { AuthContext } from "../../container/providers/auth"

export default function Logout (){
    const {username, picture_url} = react.useContext(AuthContext);


    return (
        <LogoutLayout>  
            <SlArrowDown/>
            <img src={picture_url} alt={`picture of ${username}`}></img>   
        </LogoutLayout>
    )
}

const LogoutLayout = styled.div`

    width:90px;
    display:flex;
    align-items: center;
    justify-content: space-between;

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