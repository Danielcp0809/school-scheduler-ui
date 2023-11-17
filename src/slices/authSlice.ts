import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthUser, IAuthUserSchool } from '../interfaces/authUser.interface';

export interface LoggedSession {
    user?: IAuthUser | null;
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
        setSchoolInfo: (state, action: PayloadAction<Partial<IAuthUserSchool>>) => {
            if(!state.user) return
            state.user.school.name = action.payload.name ?? state.user.school.name;
            state.user.school.address = action.payload.address ?? state.user.school.address;
            state.user.school.phone = action.payload.phone ?? state.user.school.phone;
        },
    },
});

export const { setLoginSession, setLogoutSession, setNewTokenData, setSchoolInfo} = authSlice.actions;

export default authSlice.reducer;