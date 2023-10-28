import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { LoggedSession } from "../../slices/authSlice";

const Auth = () => {
    const location = useLocation();
    const isLoggedIn = useSelector((state: LoggedSession) => state.isLoggedIn);
    console.log(isLoggedIn)
    return (
        isLoggedIn 
            ? <Outlet /> 
            : <Navigate to={{pathname: '/login'}} state={{from: location}} replace />
    )
}

export default Auth;