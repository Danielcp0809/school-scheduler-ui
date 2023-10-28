import { store } from '../index'
import { setLoginSession, setLogoutSession, setNewTokenData } from '../slices/authSlice';
/**
 * Returns the refresh token
 */
export const getRefreshToken = () => {
    const state = store.getState();
    return state.auth.refreshToken;
}

/**
 * Returns the access token
 */
export const getAccessToken = () => {
    const state = store.getState();
    return state.auth.token;
}

/**
 * Set new token data
 * @param token access token
 * @param refreshToken refresh token
 */

export const setTokenData = (token: string | null, refreshToken: string | null) => {
    store.dispatch(setNewTokenData({token, refreshToken}))
}


/**
 * Logout user
 */

export const logoutUser = () => {
    store.dispatch(setLogoutSession())
}