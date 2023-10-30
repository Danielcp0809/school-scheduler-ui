import { combineReducers } from "redux";
import authSlice, { LoggedSession } from "../slices/authSlice";
import appSlice, { AppCommon } from "../slices/appSlice";

export interface IRootState {
    auth: LoggedSession
    app: AppCommon
}

const rootReducer = combineReducers({
    auth: authSlice,
    app: appSlice
});

export default rootReducer;