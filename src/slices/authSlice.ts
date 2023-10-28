import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoggedSession {
    user?: any | null;
    token?: string | null,
    isLoggedIn?: boolean,
}

const initialState: LoggedSession = {
    user: null,
    token: null,
    isLoggedIn: true,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginSession: (state, action: PayloadAction<{user: any, token: string}>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        setLogoutSession: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setLoginSession, setLogoutSession } = authSlice.actions;

export default authSlice.reducer;