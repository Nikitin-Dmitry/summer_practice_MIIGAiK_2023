import styled from "styled-components";

const AccountStyle = {
    ContainerAccount: styled.div`
    padding-left: 120px;
    `,
    ContainerImgAndAbout: styled.div`
    display: flex;
    `,
    ContainerAbout: styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    `,
    ContainerNameAndAge: styled.div`
    display: flex;
    `,
    Age: styled.p`
    font-size: 30px;
    `,
    ContainerImg: styled.div`
    max-width: 320px;
    max-height: 568x;
    margin-right: 50px;
    border-radius: 15px;
    `,
    ContainerTextAbout: styled.div`
    display: flex;
    flex-direction: column;
    `,
    NameAccount: styled.h2`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
    `,
    AboutMe: styled.div`
    font-size: 25px;
    max-width: 320px;
    `,
    ContainerListTags: styled.ul`
    display: flex;
    > li {
        margin-right: 20px;
    };
    ::last-child {
        margin-right: 0;
    }
    `,
    ItemTags: styled.li`
    padding: 2px 5px;
    border: solid 1px #000074;;
    border-radius: 5px;
    `
}

export default AccountStyle