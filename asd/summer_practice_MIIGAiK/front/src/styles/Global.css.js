import styled from "styled-components";

const GlobalStyle = {
    Container: styled.div`
    `,
    Btn: styled.button`
    padding: 5px 15px;
    border: solid 1px black;
    backgroung-image: url("https://img.icons8.com/?size=256&id=NjzqV0aREXb6&format=png")
    `,
    SideBar: styled.nav`
    width: 100px;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    left: 0;
    top: 0;
    background-color: #000074;
    padding: 20px;
    height: 100vh;
    :nth-child(3) {
        margin-bottom: auto;
    }
    `,
    SideBarBtn: styled.button`
    max-width: 60px;
    max-height: 60px;
    margin-bottom: 30px;
    `,
    ContainerLogo: styled.div`
    position: absolute;
    max-width: 100px;
    top: 20;
    right: 25px;
    `
}

export default GlobalStyle