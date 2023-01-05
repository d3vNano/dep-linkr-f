import styled from "styled-components";
function Topbar (){
    return (
        <HeaderLayout>
            <div>Aqui fica a logo</div>
            <div>Aqui fica a barra de pesquisa</div>
            <div>Aqui fica a foto do usuário</div>
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