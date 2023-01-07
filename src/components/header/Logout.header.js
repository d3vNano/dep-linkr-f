import styled from "styled-components"
import { SlArrowDown } from "react-icons/sl"

export default function Logout (){

    //exemplo
    const promisse={
        username:"Vô rindo de nervoso",
        profile_url:"https://t.ctcdn.com.br/uX_beBS4-td4TfPcWOEzb36vfyo=/720x405/smart/filters:format(webp)/i603337.jpeg"
    }

    return (
        <LogoutLayout>  
            <SlArrowDown/>
            <img src={promisse.profile_url} alt={`picture at ${promisse.username}`}></img>   
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