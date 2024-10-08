import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Check localStorage for persisted state and parse it (for token)
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

// Create the Redux store with the persisted state
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

// Check for token in localStorage and set auth state if available
// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
