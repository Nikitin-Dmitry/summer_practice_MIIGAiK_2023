import styled from "styled-components";

const AssesStyle = {
    ContainerAsses: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 505px;
    max-height: 900px;
    padding-left: 100px;
    `,
    ContainerBidder: styled.div`
    position: relative;
    max-width: 400px;
    max-height: 500px;
    border: solid 1px grey;
    border-radius: 15px;
    overflow: hidden;
    margin: 65px 0 30px 0; 
    `,
    ContainerAboutBidder: styled.div`
    width: 100%;
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #e3e3e347;
    `,
    NameBidder: styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    `,
    AboutBidder: styled.p`
    font-size: 13px;
    `,
    ListHobbies: styled.ul`
    display: flex;
    `,
    Hobby: styled.li`
    padding: 2px 5px;
    border: solid 1px #000074;;
    border-radius: 5px;
    margin-right: 10px;
    :last-of-type {
        margin-right: 0;
    }
    `,
    ContainerBtns: styled.div`
    display: flex;
    :first-child {
        margin-right: 25px;
    }
    `,
    Btn: styled.button`
    padding: 0;
    margin: auto;
    border-radius:40px;
    border: none;
    `,
    EndUsers: styled.div`
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
    `
}

export default AssesStyle