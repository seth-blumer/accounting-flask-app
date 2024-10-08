import axiosInstance from "../axiosInstance";

// Function to log in a user
export const login = async (username: string, password: string) => {
    const response = await axiosInstance.post('/auth/login', { username, password });
    return response.data;  // Returns access_token, refresh_token, and user info
};

// Function to sign up a user
export const signup = async (username: string, password: string) => {
    const response = await axiosInstance.post('/auth/signup', { username, password });
    return response.data;  // Returns user info
};

// Function to refresh access token
export const refreshToken = async (refreshToken: string) => {
    const response = await axiosInstance.post('/auth/refresh', { refresh_token: refreshToken });
    return response.data;  // Returns a new access token
};
