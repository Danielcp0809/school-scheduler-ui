import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppCommon {
    isMenuOpen?: boolean,
}

const initialState: AppCommon = {
    isMenuOpen: false,
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setMenuOpen: (state, action: PayloadAction<AppCommon>) => {
            state.isMenuOpen = action.payload.isMenuOpen;
        },
    },
});

export const { setMenuOpen } = appSlice.actions;

export default appSlice.reducer;