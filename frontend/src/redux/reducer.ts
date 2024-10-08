import * as types from "./actionTypes";
import { AuthAction } from "./actions";

// Define the state type
interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: string | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null,
  loading: false,
  error: null,
};

// The auth reducer
const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case types.LOGIN_START:
    case types.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case types.LOGIN_FAIL:
    case types.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case types.REFRESH_TOKEN_FAIL:
      return {
        ...state,
        token: null,
        refreshToken: null,
        user: null,
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
