import { shallowEqual, useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { IRootState } from "../../reducers/rootReducer";

const Auth = () => {
    const location = useLocation();
    const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn, shallowEqual);
    return (
        isLoggedIn 
            ? <Outlet /> 
            : <Navigate to={{pathname: '/login'}} state={{from: location}} replace />
    )
}

export default Auth;