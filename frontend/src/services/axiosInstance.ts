import axios from 'axios';
import { store } from "../redux/store";
// TODO: Use the refreshToken function to refresh the token when it expires
import { refreshToken } from './auth/auth';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_URL}`,
});

// Set up the Axios interceptor to include the JWT token in the Authorization header
axiosInstance.interceptors.request.use(config => {
    const token = store.getState().auth.token; // Get the token from Redux store
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
