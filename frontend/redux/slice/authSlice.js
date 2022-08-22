import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authId: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authReducer: () => {
            authId: 1
        }
    },
})


export const {authReducer} = authSlice.actions;
export default authSlice.reducer;