import { createSlice } from "@reduxjs/toolkit"
import { logInThunk, logOutThunk, refreshAuthThunk, registerThunk } from "./registrationThunks";


const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: builder =>
        builder
            //---------------------- Registration ------------------------------
            .addCase(registerThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Log In ----------------------------------
            .addCase(logInThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logInThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logInThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Log Out ----------------------------------
            .addCase(logOutThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logOutThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.userData = null;
                state.token = null;
            })
            .addCase(logOutThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
            //------------------------- Refresh ----------------------------------
            .addCase(refreshAuthThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(refreshAuthThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
            })
            .addCase(refreshAuthThunk.rejected, (state, { error }) => {
                state.isLoading = false;
                state.error = error;
            })
});

export const authReducer = authSlice.reducer;