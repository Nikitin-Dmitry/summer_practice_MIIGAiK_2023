import React from "react";
import { useEffect } from "react";
import AccountStyle from "../../styles/Account/Account.css";
import { useSelector } from "react-redux";
import Button from '@mui/joy/Button';
import SideBarComp from "../global/SideBar";
import LogoComp from "../global/Logo";


const { NameAccount, Age, ContainerImgAndAbout, ContainerNameAndAge, ContainerTextAbout, ContainerAccount, ContainerImg, AboutMe, ContainerAbout, ContainerListTags, ItemTags } = AccountStyle

function Account() {

    const UserData = useSelector(state => state.Auth.user)[0]

    useEffect(() => console.log(UserData), [])

    return (
        <ContainerAccount>
            <LogoComp></LogoComp>
            <SideBarComp></SideBarComp>
            <ContainerAbout>
                <ContainerImgAndAbout>
                    <ContainerImg>
                        <img src={UserData.ImgUrl} alt="" />
                    </ContainerImg>
                    <ContainerTextAbout>
                        <ContainerNameAndAge>
                            <NameAccount>{UserData.Name}, </NameAccount>
                            <Age>{UserData.Age} лет</Age>
                        </ContainerNameAndAge>
                        <AboutMe>{UserData.About}</AboutMe>
                    </ContainerTextAbout>
                </ContainerImgAndAbout>
                <ContainerListTags className="list-reset">
                    {UserData.listHobby.map((el) => {
                        return <ItemTags>{el}</ItemTags>
                    })}
                </ContainerListTags>
            </ContainerAbout>
        </ContainerAccount>
    )
}

export default Account