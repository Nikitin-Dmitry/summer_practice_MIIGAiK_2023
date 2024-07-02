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
                            <img src={el.ImgUrl} alt="" srcset="" style={{ height: "max-content" }} />

                            <NameLike>{el.Name}</NameLike>
                            <LeftBtn>
                                <img src="https://psv4.userapi.com/c909218/u436718231/docs/d19/93d7e5487c3d/deny1.png?extra=r4mKDCBw_hkq2QA1eD3zYZ_T7sSJkOgNjLPXM_T5TSf17MFqg_YV9iXXZNXIcaOEAG_lGC7TlxQy-IPneOxk5469GLqo6PJxl1U1_Do3DqVL3_MuCDkF-Gnfs13PjDPT_8D1aigPDPxWkYTYyoatdIw2" alt="Не нравится" srcset="" style={{ width: "45px", height: "40px", margin: "0px" }} />
                            </LeftBtn>
                            <RightBtn onClick={() => {
                                like(el._id)
                                alert(`Телеграмм для продолжения общения: ${el.Login}`)
                            }}
                            >
                                <img src="https://psv4.userapi.com/c909218/u436718231/docs/d46/e5c60d09c638/allow1.png?extra=NcCj9vcM9WH-HsRGJKXcrwkFhueRyurrlvRqFsGWIY7MliS1mmxqDpu0PQsIO38BjeKKduEmDeb8W3Bud-wr4woCwPmFRH_F-Z9J4q3rDAl8svApEcbJWsTFEWCaICs724Zjs0FmOUUAQew84pF_T00x" alt="Нравится" srcset="" style={{ width: "45px", height: "35px", margin: "3px 0 0 3px" }} />
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