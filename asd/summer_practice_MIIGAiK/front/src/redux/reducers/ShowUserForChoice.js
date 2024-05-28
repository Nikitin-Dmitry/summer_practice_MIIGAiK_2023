import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserForChoice = createAsyncThunk("Asses/fetchUserForChoice", async (params) => {
    try {
        const { data } = await axios.post("/Asses", params.data)
        let dataUserForChoice = data
        params.dispatch(loadDataUser(dataUserForChoice))
    } catch (error) {
        console.log(error)
    }
})

export const fetchLikeUser = createAsyncThunk("Asses/fetchLikeUser", async (params) => {
    try {
        const { data } = await axios.put("/Asses", params.dataRate)
        let dataCategory = data
        return dataCategory
    } catch (error) {
        console.log(error)
    }
})

export const loadLikeUsers = createAsyncThunk("Like/loadLike", async (params) => {
    try {
        const { data } = await axios.post("/Like", params.data)
        let dataUsersForLike = data
        params.dispatch(loadDataUsersForLike(dataUsersForLike[0]))
    } catch (error) {
        console.log(error)
    }
})

export const removeUserLike = createAsyncThunk("Like/removeUserLike", async (params) => {
    try {
        await axios.put("/Like", params.data)
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    UserForChoice: "end",
    UsersForLike: "",
    UsersStatus: "loading",
    UserForChoiceStatus: "loading"
}

export const ShowUserForChoiceSlice = createSlice({
    name: "ShowUsers",
    initialState,
    reducers: {
        loadDataUser: (state, action) => {
            if (action.payload != "") {
                state.UserForChoice = action.payload
            } else {
                state.UserForChoice = "end"
            }
        },
        loadDataUsersForLike: (state, action) => {
            state.UsersForLike = action.payload
            console.log(action.payload)
        }
    },
    extraReducers: builder => {
        // Get Answers
        builder.addCase(fetchUserForChoice.pending, (state) => {
            state.UsersStatus = "loading";
        })
        builder.addCase(fetchUserForChoice.fulfilled, (state, action) => {
            state.Users = action.payload
            state.UsersStatus = "loaded";
        })
        builder.addCase(fetchUserForChoice.rejected, (state) => {
            state.UsersStatus = "error";
        })
    },
    extraReducers: builder => {
        // Get Answers
        builder.addCase(fetchLikeUser.pending, (state) => {
            state.UserForChoiceStatus = "loading";
        })
        builder.addCase(fetchLikeUser.fulfilled, (state, action) => {
            state.Users = action.payload
            state.UserForChoiceStatus = "loaded";
        })
        builder.addCase(fetchLikeUser.rejected, (state) => {
            state.UserForChoiceStatus = "error";
        })
    }
})

export const { clearItemsAnswer, setTittleCategory, loadDataUser, loadDataUsersForLike} = ShowUserForChoiceSlice.actions

export default ShowUserForChoiceSlice.reducer