import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/Auth";
import ShowUserForChoiceSlice from "./reducers/ShowUserForChoice";

export const store = configureStore({
    reducer: {
        Auth: AuthSlice,
        ShowUsers: ShowUserForChoiceSlice,
        
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})