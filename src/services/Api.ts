import axios from 'axios';
import { getAccessToken, getRefreshToken, logoutUser, setTokenData } from './AuthService';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3030'

const authAPI = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

authAPI.interceptors.request.use(
    config => {
        const accessToken = getAccessToken();
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

authAPI.interceptors.response.use(
    response => response,
    async (error) => {
        const previousRequest = error?.config;
        const newTokenData = await refreshToken(getRefreshToken() ?? '')
        if(!newTokenData.access_token) {
            logoutUser();
            // TODO: show pop up.
            return
        }
        setTokenData(newTokenData.access_token ?? null, newTokenData.refresh_token ?? null)
        if (error?.response?.status !== 403 && !previousRequest?.sent) {
            previousRequest.sent = true;
            previousRequest.headers['Authorization'] = `Bearer ${newTokenData.access_token}`;
            return authAPI(previousRequest);
        }

        return Promise.reject(error)
    }
)

// NON AUTHORIZED API CALLS
export const sessionLoginUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth`, {
        username,
        password
    });
    return response
}

export const refreshToken = async (refreshToken: string) => {
    const response = await axios.post(`${API_URL}/auth/refresh`, {
        refresh_token: refreshToken
    });
    return response.data;
}

export const getTeachers = async () => {
    const response = await authAPI.get('/teachers');
    return response;
}