import styled from "styled-components"

export default function Title ({title, picture_url, username}){
    return (
        <TitleBox>
            {!picture_url ?
                <h6> {title} </h6>
            :
            <div>
                <img src={picture_url} alt={`picture of ${username}`}></img>
                <h6>{`${username}'s posts`}</h6>
            </div>
            }
        </TitleBox>
    )
}

const TitleBox = styled.div`

    width:100%;

    div{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        
        display:flex;
        
        align-items: center;
    }
    h6{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    
        color: #FFFFFF;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        margin: 15px;
    }
`