import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoggedSession {
    user?: any | null;
    token?: string | null,
    refreshToken?: string | null,
    isLoggedIn?: boolean,
}

const initialState: LoggedSession = {
    user: null,
    token: null,
    refreshToken: null,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginSession: (state, action: PayloadAction<LoggedSession>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.isLoggedIn = true;
        },
        setNewTokenData: (state, action: PayloadAction<LoggedSession>) => {
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
        },
        setLogoutSession: (state) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setLoginSession, setLogoutSession, setNewTokenData } = authSlice.actions;

export default authSlice.reducer;