import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import AuthStyle from "../../../styles/Auth/Auth.css";
import { useNavigate } from "react-router";
import { fetchLogin } from "../../../redux/reducers/Auth";
import GlobalStyle from "../../../styles/Global.css";
import LogoComp from "../../global/Logo";
import Recaptcha from 'react-recaptcha'

const { FormAuth, ContainerAuth, ContainerBtnsNav, ContainerCaptha } = AuthStyle
const { Container } = GlobalStyle

function Login(props) {

    let [login, setLogin] = useState(),
        [pass, setPass] = useState()

    let [flagCaptcha, setFlagCaptcha] = useState(false)

    const navigate = useNavigate(),
        dispatch = useDispatch()

    function Login() {
        let data = {
            login: login,
            pass: pass
        }
        dispatch(fetchLogin({ data, dispatch, navigate }))
    }

    return (
        <Container>
            <LogoComp></LogoComp>
            <ContainerAuth>
                <ContainerBtnsNav>
                    <Button type="submit" onClick={() => navigate("/Auth/Login")} size="sm">Войти</Button>
                    <Button type="submit" onClick={() => navigate("/Auth/Regist")} size="sm">Создать аккаунт</Button>
                </ContainerBtnsNav>
                <FormAuth>
                    <Input
                        placeholder="Введите логин"
                        size="md"
                        variant="soft"
                        type="mail"
                        onChange={(e) => { setLogin(e.target.value) }}
                    />
                    <Input
                        placeholder="Введите пароль"
                        size="md"
                        variant="soft"
                        type="password"
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                    <Button disabled={!flagCaptcha} onClick={Login}>Войти</Button>
                </FormAuth>
            </ContainerAuth>
            <ContainerCaptha>
                <Recaptcha
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    render="explicit"
                    verifyCallback={() => {
                        setTimeout(() => {
                            setFlagCaptcha(false)
                        }, 60000)
                        setFlagCaptcha(true)
                    }}
                    onloadCallback={() => { console.log("loaded") }}
                />
            </ContainerCaptha>

        </Container>
    )
}

export default Login