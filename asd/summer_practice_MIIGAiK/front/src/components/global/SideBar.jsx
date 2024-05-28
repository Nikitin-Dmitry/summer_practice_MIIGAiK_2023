import React from "react";
import GlobalStyle from "../../styles/Global.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import logoTinder from "../../../src/imgs/logo_tinder.png"

const { SideBar, SideBarBtn } = GlobalStyle

function SideBarComp() {

    const userData = useSelector(state => state.Auth.user)

    const navigate = useNavigate()

    console.log(userData)
    
    return (
        <>
            <SideBar>
                <SideBarBtn onClick={() => { navigate("/Account") }}><img src="https://img.icons8.com/?size=256&id=95101&format=png" alt="Личный кабинет" /></SideBarBtn>
                <SideBarBtn onClick={() => { navigate("/Asses") }} icon="pi pi-check" aria-label="Filter"><img src={logoTinder} alt="Знакомства" />
                    <span className="Notification">{userData[0].UsersWhoLikeU.length}</span>
                </SideBarBtn>
                <SideBarBtn onClick={() => { navigate("/Likes") }} icon="pi pi-check" aria-label="Filter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43px" height="43px" viewBox="0 0 24 24" fill="none">
                        <path d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <g opacity="0.4">
                            <path d="M19.0808 3.71973L17.3108 2.34973C17.0808 2.11973 16.5708 2.00977 16.2208 2.00977H14.0508C13.3608 2.00977 12.6208 2.51972 12.4508 3.20972L11.0808 7.37976C10.7908 8.17976 11.3108 8.86975 12.1708 8.86975H14.4608C14.8008 8.86975 15.0908 9.15981 15.0308 9.55981L14.7408 11.3898C14.6308 11.8998 14.9708 12.4798 15.4808 12.6498C15.9408 12.8198 16.5108 12.5898 16.7408 12.2498L19.0808 8.75977" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M22.0004 3.71985V9.31982C22.0004 10.1198 21.6604 10.4099 20.8604 10.4099H20.2904C19.4904 10.4099 19.1504 10.1198 19.1504 9.31982V3.71985C19.1504 2.91985 19.4904 2.62988 20.2904 2.62988H20.8604C21.6604 2.62988 22.0004 2.90985 22.0004 3.71985Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </SideBarBtn>
                <SideBarBtn onClick={() => { navigate("/Auth") }} icon="pi pi-check" aria-label="Filter"><img src="https://img.icons8.com/?size=256&id=T9nkeADgD3z6&format=png" alt="Выйти" /></SideBarBtn>
            </SideBar>
        </>
    )
}

export default SideBarComp