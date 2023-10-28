import axios from 'axios';

// NON AUTHORIZED API CALLS
const API_URL = process.env.REACT_APP_API_URL 

export const sessionLoginUser = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth`, {
        username,
        password
    });
    return response
}