import { combineReducers } from "redux";
import authReducer from "./reducer";

// May add reducers in the future
const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
