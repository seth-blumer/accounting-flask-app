import { Dispatch } from "redux";
import * as types from "./actionTypes";
import axios from "axios";

// Define types for actions

// Login action types
// ------------------
interface LoginStartAction {
  type: typeof types.LOGIN_START;
}

interface LoginSuccessAction {
  type: typeof types.LOGIN_SUCCESS;
  payload: { token: string; user: string };
}

interface LoginFailAction {
  type: typeof types.LOGIN_FAIL;
  payload: string;
}

// Signup action types
// -------------------
interface SignupStartAction {
  type: typeof types.SIGNUP_START;
}

interface SignupSuccessAction {
  type: typeof types.SIGNUP_SUCCESS;
  payload: { user: string };
}

interface SignupFailAction {
  type: typeof types.SIGNUP_FAIL;
  payload: string;
}

interface RefreshTokenSuccessAction {
  type: typeof types.REFRESH_TOKEN_SUCCESS;
  payload: { token: string };
}

// Refresh token action types
// --------------------------
interface RefreshTokenFailAction {
  type: typeof types.REFRESH_TOKEN_FAIL;
}

interface LogoutAction {
  type: typeof types.LOGOUT;
}

// All possible action types for auth
export type AuthAction =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailAction
  | SignupStartAction
  | SignupSuccessAction
  | SignupFailAction
  | RefreshTokenSuccessAction
  | RefreshTokenFailAction
  | LogoutAction;

// Action creators for login
// --------------------------
export const loginStart = (): AuthAction => ({
  type: types.LOGIN_START,
});

export const loginSuccess = (token: string, user: string): AuthAction => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, user },
});

export const loginFail = (error: string): AuthAction => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

// Action creators for signup
// ---------------------------
export const signupStart = (): AuthAction => ({
  type: types.SIGNUP_START,
});

export const signupSuccess = (user: string): AuthAction => ({
  type: types.SIGNUP_SUCCESS,
  payload: { user },
});

export const signupFail = (error: string): AuthAction => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});

// Action creators for refresh token
// ---------------------------------
export const refreshTokenSuccess = (token: string): AuthAction => ({
  type: types.REFRESH_TOKEN_SUCCESS,
  payload: { token },
});

export const refreshTokenFail = (): AuthAction => ({
  type: types.REFRESH_TOKEN_FAIL,
});

// Action creator for logout
export const logout = (): AuthAction => ({
  type: types.LOGOUT,
});

// Async action for login
export const loginInitiate = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch(loginStart());
    try {
      const response = await axios.post("/login", { username, password });
      const { access_token, user } = response.data;

      // Store the token in localStorage; just for demo purposes
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch(loginSuccess(access_token, user));
    } catch (error) {
      dispatch(loginFail(error.response?.data?.msg || 'Login failed'));
    }
  };
};

// Async action for signup
export const signupInitiate = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch(signupStart());
    try {
      const response = await axios.post("/signup", { username, password });
      const { user } = response.data;
      dispatch(signupSuccess(user));
      // Optionally, log the user in after signup
    } catch (error) {
      dispatch(signupFail(error.response?.data?.msg || 'Signup failed'));
    }
  };
};

// Async action for refreshing token
export const refreshTokenInitiate = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      dispatch(refreshTokenFail());
      return;
    }

    try {
      const response = await axios.post("/refresh", { refresh_token: refreshToken });
      const { access_token } = response.data;

      // Update the access token in localStorage
      localStorage.setItem("token", access_token);

      dispatch(refreshTokenSuccess(access_token));
    } catch (error) {
      console.error("Failed to refresh token", error);
      dispatch(refreshTokenFail());
    }
  };
};

// Async action for logout
export const logoutInitiate = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('reduxState');
    dispatch(logout());
  };
};