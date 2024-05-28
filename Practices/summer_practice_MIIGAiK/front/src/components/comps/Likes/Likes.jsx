import React from "react";
import { useEffect } from "react";
import SideBarComp from "../../global/SideBar";
import LogoComp from "../../global/Logo";
import { useDispatch, useSelector } from "react-redux";
import LikesStyle from "../../../styles/Likes/Likes.css";
import { loadLikeUsers } from "../../../redux/reducers/ShowUserForChoice";
import { removeUserLike } from "../../../redux/reducers/ShowUserForChoice";
import allow1 from "../../../imgs/allow1.png"
import deny1 from "../../../imgs/deny1.png"

const { ContainerLikes, ContainerLikesUser, NameLike, LeftBtn, RightBtn, TittleLikes } = LikesStyle


function Likes() {

    const setterUser = useSelector(state => state.Auth.user)[0]
    const UsersForLike = useSelector(state => state.ShowUsers.UsersForLike)

    const dispatch = useDispatch()

    let data = {
        setterId: setterUser._id
    }

    function like(id) {
        console.log(id)
        let data = {
            setterId: setterUser._id,
            getterId: id
        }
        dispatch(removeUserLike({ data, dispatch }))
        dispatch(loadLikeUsers({ data, dispatch }))
    }

    useEffect(() => {
        dispatch(loadLikeUsers({ data, dispatch }))
    }, [])

    return (
        <>
            <LogoComp></LogoComp>
            <SideBarComp></SideBarComp>
            <TittleLikes>Вы понравились:</TittleLikes>
            <ContainerLikes>
                {UsersForLike.lenght != 0 && !!UsersForLike && UsersForLike[0] != null
                    ? UsersForLike.map((el => {
                        return <ContainerLikesUser>
                            <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614344178_47-p-chelovek-na-svetlom-fone-51.jpg" alt="" srcset="" style={{ height: "max-content" }} />

                            <NameLike>{el.Name}</NameLike>
                            <LeftBtn>
                                <img src="https://img.icons8.com/?size=256&id=RFB1w7mlgenN&format=png" alt="Не нравится" srcset="" style={{ width: "45px", height: "45px", margin: "0px" }} />
                            </LeftBtn>
                            <RightBtn onClick={() => {
                                like(el._id)
                                alert(`Телеграмм для продолжения общения: ${el.Login}`)
                            }}
                            >
                                <img src="https://img.icons8.com/?size=256&id=oEc1O2tvXKUb&format=png" alt="Нравится" srcset="" style={{ width: "45px", height: "45px", margin: "0px" }} />
                            </RightBtn>

                        </ContainerLikesUser>
                    }))
                    : <p>Вы пока что никому не понравились :(</p>
                }
            </ContainerLikes>
        </>
    )
}

export default Likes