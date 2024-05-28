import React from "react";
import { useEffect } from "react";
import AssesStyle from "../../styles/Asses/Asses.css";
import SideBarComp from "../global/SideBar";
import LogoComp from "../global/Logo";
import { fetchUserForChoice } from "../../redux/reducers/ShowUserForChoice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikeUser } from "../../redux/reducers/ShowUserForChoice";
import allow from "../../../src/imgs/allow.png"
import deny from "../../../src/imgs/deny.png"

const { EndUsers, ContainerAsses, ContainerBidder, ContainerBtns, Btn, ContainerAboutBidder, NameBidder, AboutBidder, ListHobbies, Hobby } = AssesStyle


function Asses() {

    const dispatch = useDispatch()

    const setterUser = useSelector(state => state.Auth.user)[0]

    let getterUser = useSelector(state => state.ShowUsers.UserForChoice),
        UserForChoiceStatus = useSelector(state => state.ShowUsers.UserForChoiceStatus)

    let data = {
        setterId: setterUser._id,
        setterGender: setterUser.Gender
    }

    function rate(rating) {
        console.log(rating)
        let dataRate = {
            setterId: setterUser._id,
            getterId: getterUser._id,
            rating: rating,
            setterGender: setterUser.Gender
        }
        dispatch(fetchLikeUser({ dataRate, dispatch }))
    }

    function reload() {
        dispatch(fetchUserForChoice({ data, dispatch }))
    }

    useEffect(() => {
        dispatch(fetchUserForChoice({ data, dispatch }))
    }, [])
    

    return (
        <>
            <LogoComp></LogoComp>
            <SideBarComp></SideBarComp>
            <ContainerAsses>
                {(getterUser != "end")?
                    <>
                        <ContainerBidder>
                            <img src={getterUser.ImgUrl} alt="" style={{ height: "max-content" }} />
                            <ContainerAboutBidder>
                                <NameBidder>{
                                    UserForChoiceStatus = "loaded" && !!getterUser.Name
                                        ? getterUser.Name
                                        : "Имя загружается"
                                }</NameBidder>
                                <AboutBidder>{
                                    UserForChoiceStatus = "loaded" && !!getterUser.About
                                        ? getterUser.About
                                        : "Имя загружается"
                                }</AboutBidder>
                                <ListHobbies className="list-reset">
                                    {
                                        !!getterUser && !!getterUser.listHobby
                                            ? getterUser.listHobby.map((el) => {
                                                return <Hobby>{el}</Hobby>
                                            })
                                            : "Имя загружается"
                                    }
                                </ListHobbies>
                            </ContainerAboutBidder>
                        </ContainerBidder>
                        <ContainerBtns>
                            <Btn onClick={() => { 
                                rate("dislike") 
                                reload()
                                }}>
                                <img src={deny} alt="Не нравится" srcset="" style={{ width: "70px", height: "70px", margin: "0px" }} />
                            </Btn>
                            <Btn onClick={() => { 
                                rate("like") 
                                reload()
                                }}>
                                <img src={allow} alt="Нравится" srcset="" style={{ width: "70px", height: "70px", margin: "0px" }} />
                            </Btn>
                        </ContainerBtns>
                    </>
                    : <EndUsers>
                        <p>Вы просмотрели всех пользователей</p>
                    </EndUsers>
                }
            </ContainerAsses>
        </>
    )
}

export default Asses