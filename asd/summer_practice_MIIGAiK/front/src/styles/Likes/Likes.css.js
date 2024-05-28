import styled from "styled-components";

const LikesStyle = {
    ContainerLikes: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 170px;
    `,
    ContainerLikesUser: styled.div`
    position: relative;
    max-width: 290px;
    max-height: 515px;
    border: solid 1px grey;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 25px;
    margin-bottom: 25px;
    :last-of-type {
        margin-right: 0;
    }
    `,
    ContainerBtnsLikes: styled.div`
    position: absolute;
    bottom: 20px;
    left: 20%;
    :first-child {
        margin-right: 25px;
    }`,
    NameLike: styled.p`
    font-size: 27px;
    font-weight: bold;
    text-align: center;
    width: 290px;
    padding-bottom: 65px;
    position: absolute;
    background-color:  #ffffff3b;;
    border-radius: 7px;
    box-shadow: #adadad 0 0 15px;
    bottom: 0;
    `,
    LeftBtn: styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 0 25px 0 15px;
    background-color: #000074;
    `,
    RightBtn: styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 25px 0 15px 0;
    background-color: #000074;
    `,
    TittleLikes: styled.h2`
    font-size: 35px;
    padding-left: 100px;
    margin-bottom: 18px;
    text-align: center;
    `
}

export default LikesStyle