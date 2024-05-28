import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


const initialState = {
    typeAuth: "login",
    user: "",
    request: ""
}

export const fetchLogin = createAsyncThunk("Auth/fetchLogin", async (params) => {
    try {
        console.log(params.data)
        const { data } = await axios.post(`/Auth/Login`, params.data)
        let dataUser = data
        params.dispatch(setUserData(dataUser))
        if (dataUser != "incorrect"){
            params.navigate("/Account")
        } else {
            alert("Неверный логин или пароль")
        }
        console.log(dataUser)
    } catch (error) {
        initialState.request = error
    }
})

export const fetchRegister = createAsyncThunk("Auth/fetchRegister", async (params) => {
    try {
        console.log(params.data)
        const { data } = await axios.post("/Auth/Regist", params.data)
        params.dispatch(changeRequestRegist("Ваш аккаунт успешно зарегистрирован"))
        params.navigate("/Login")
    } catch (error) {
        params.dispatch(changeRequestRegist(error.response.data))
        console.log(error.response.data)
    }
})

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        changeTypeAuth: (state, action) => {
            state.typeAuth = action.payload
        },
        changeRequestRegist: (state, action) => {
            state.request = action.payload
        },
        setUserData: (state, action) => {
            console.log(action.payload)
            state.user = action.payload
        }
    },
    extraReducers: builder => {
        // Get Answers
        builder.addCase(fetchLogin.pending, (state) => {
            state.UsersStatus = "loading";
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            // state.user = action.payload
            state.UsersStatus = "loaded";
        })
        builder.addCase(fetchLogin.rejected, (state) => {
            state.UsersStatus = "error";
        })
    },
    extraReducers: builder => {
        // Get Answers
        builder.addCase(fetchRegister.pending, (state) => {
            state.UsersStatus = "loading";
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            // console.log(action)
        })
        builder.addCase(fetchRegister.rejected, (state) => {
            state.UsersStatus = "error";
        })
    }
})

export const { changeTypeAuth, changeRequestRegist, setUserData } = AuthSlice.actions

export default AuthSlice.reducer