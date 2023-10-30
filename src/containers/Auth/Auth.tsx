import { shallowEqual, useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { IRootState } from "../../reducers/rootReducer";
import Webpage from "../Webpage/Webpage";

const Auth = () => {
    const location = useLocation();
    const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn, shallowEqual);
    return (
        isLoggedIn 
            ? <Webpage><Outlet /></Webpage>
            : <Navigate to={{pathname: '/login'}} state={{from: location}} replace />
    )
}

export default Auth;