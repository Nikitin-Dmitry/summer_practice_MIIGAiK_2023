import styled from "styled-components";

const AuthStyle = {
    ContainerAuth: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: solid 1px black;
    border-radius: 5px;
    max-width: 400px;
    margin: auto;
    margin-bottom: 20px;
    `,
    FormAuth: styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    margin: 15px 0px 30px 0;
    > div {
        margin-bottom: 20px;
    }
    `,
    ContainerBtnsNav: styled.nav`
    border-bottom: solid 1px black;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    padding: 10px 0;
    `,
    ContainerCaptha: styled.div`
    max-width: 300px;
    margin: auto;
    `
}

export default AuthStyle