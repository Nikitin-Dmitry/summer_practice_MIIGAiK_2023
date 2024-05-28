import React from "react";
import GlobalStyle from "../../styles/Global.css";
import Logo from "../../imgs/MIIGAiK_logo.png"

const { ContainerLogo } = GlobalStyle

function LogoComp() {


    return (
        <ContainerLogo>
            <img style={{maxWidth: "100px"}} src={Logo} alt="МИИГАиК" />
        </ContainerLogo>
    )
}

export default LogoComp