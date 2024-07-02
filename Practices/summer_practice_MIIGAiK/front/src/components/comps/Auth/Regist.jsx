import React from "react";
import { useState, useEffect } from "react";
import AuthStyle from "../../../styles/Auth/Auth.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../../redux/reducers/Auth";
import { changeRequestRegist } from "../../../redux/reducers/Auth";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Box, Chip } from '@mui/joy'
import Textarea from '@mui/joy/Textarea';
import GlobalStyle from "../../../styles/Global.css";
import LogoComp from "../../global/Logo";
import Recaptcha from 'react-recaptcha';


const { FormAuth, ContainerAuth, ContainerBtnsNav, ContainerCaptha } = AuthStyle
const { Container } = GlobalStyle


function Regist(props) {

    const request = useSelector(state => state.Auth.request)

    let [login, setLogin] = useState(),
        [pass, setPass] = useState(),
        [secPass, setSecPass] = useState(),
        [name, setName] = useState(),
        [faculty, setFaculty] = useState(),
        [age, setAge] = useState(),
        [gender, setGender] = useState(),
        [hobby, setHobby] = useState(),
        [about, setAbout] = useState(),
        [baseUrl, setBaseUrl] = useState()

    let [flagCaptcha, setFlagCaptcha] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function sendData() {
        let data = {
            login: login,
            pass: pass,
            secPass: secPass,
            name: name,
            faculty: faculty,
            age: age,
            gender: gender,
            hobby: hobby,
            about: about,
            img: baseUrl
        }
        console.log(baseUrl)
        dispatch(fetchRegister({ data, dispatch, navigate }))
    }

    useEffect(() => {
        if (request != "") {
            alert(request)
            dispatch(changeRequestRegist(""))
        }
    }, [request])


    return (
        <>
            <Container>
                <LogoComp></LogoComp>
                <ContainerAuth>
                    <ContainerBtnsNav>
                        <Button type="submit" onClick={() => navigate("/Auth/Login")} size="sm">Войти</Button>
                        <Button type="submit" onClick={() => navigate("/Auth/Regist")} size="sm">Создать аккаунт</Button>
                    </ContainerBtnsNav>
                    <FormAuth onSubmit={(e) => {
                        e.preventDefault();
                        e.target.reset();
                    }}>
                        <Input
                            onChange={(event) => { setLogin(event.target.value) }}
                            placeholder="Введите никнейм телеграмма"
                            size="md"
                            variant="soft"
                            type="text"
                            required={true}
                        />
                        <Input
                            onChange={(event) => { setPass(event.target.value) }}
                            type="password"
                            placeholder="Введите пароль"
                            size="md"
                            variant="soft"
                            required={true}
                        />
                        <Input
                            onChange={(event) => { setSecPass(event.target.value) }}
                            type="password"
                            placeholder="Повторите пароль"
                            size="md"
                            variant="soft"
                            required={true}
                        />
                        <Input
                            onChange={(event) => { setName(event.target.value) }}
                            placeholder="Имя"
                            size="md"
                            variant="soft"
                            required={true}
                        />
                        <Input
                            onChange={(event) => { setAge(event.target.value) }}
                            placeholder="Возраст"
                            size="md"
                            variant="soft"
                            type="number"
                            min="18"
                            required={true}
                        />
                        <Select required={true} placeholder="Пол" onChange={(event, newValue) => { setGender(newValue) }}>
                            <Option value="Мужчина">Мужчина</Option>
                            <Option value="Женщина">Женщина</Option>
                        </Select>
                        <Select required={true} placeholder="Факультет" onChange={(event, newValue) => { setFaculty(newValue) }}>
                            <Option value="ФГиИБ">ФГиИБ</Option>
                            <Option value="ФОП">ФОП</Option>
                            <Option value="КФ">КФ</Option>
                            <Option value="ГФ">ГФ</Option>
                            <Option value="ФУТ">ФУТ</Option>
                            <Option value="ЗФ">ЗФ</Option>
                            <Option value="ФАиГ">ФАиГ</Option>
                        </Select>
                        <Select
                            multiple
                            style={{ dispay: "flex" }}
                            placeholder="Увлечения"
                            defaultValue={[]}
                            onChange={(target, newValue) => {
                                setHobby(newValue)
                            }}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: "wrap", gap: '0.25rem' }}>
                                    {selected.map((selectedOption) => (
                                        <Chip variant="soft" color="primary">
                                            {selectedOption.label}
                                        </Chip>
                                    ))}
                                </Box>
                            )}
                            sx={{
                                minWidth: '15rem',
                                maxWidth: "100px"
                            }}
                            slotProps={{
                                listbox: {
                                    sx: {
                                        width: '100%',
                                    },
                                },
                            }}
                        >
                            <Option value="Вектор">Вектор</Option>
                            <Option value="Спорт-клуб">Спорт-клуб</Option>
                            <Option value="Турклуб">Турклуб</Option>
                            <Option value="МИИГАиК Продакшн">МИИГАиК Продакшн</Option>
                            <Option value="Иностранные студенты">Иностранные студенты</Option>
                            <Option value="Центр студенческих инициатив">Центр студенческих инициатив</Option>
                        </Select>
                        <Textarea
                            onChange={(e) => { setAbout(e.target.value) }}
                            minRows={2}
                            placeholder="Немного о себе"
                            variant="soft"
                        />
                        <Input onChange={(e) => {
                            let file = e.target.files[0];
                            let reader = new FileReader();
                            reader.onloadend = function () {
                                setBaseUrl(reader.result)
                            }
                            reader.readAsDataURL(file);
                        }} type="file" placeholder="Выберите фотографию" />
                        <Button type="submit" disabled={!flagCaptcha} onClick={sendData}>Зарегистрироваться</Button>
                    </FormAuth >
                <p style={{fontSize: "14px", margin: "10px"}}>Нажимая на кнопку "Зарегистрироваться", я даю свое согласие на обработку и передачу моих Персональных данных, указанных выше, в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ "О персональных данных".
                </p> <p  style={{fontSize: "14px", margin: "10px"}}> Я подтверждаю, что, давая такое согласие, я действую по собственной воле и в своих интересах.</p>
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
        </>
    )
}

export default Regist