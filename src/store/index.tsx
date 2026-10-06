import { configureStore, combineReducers } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth/index";
import UiSlice from "./slices/ui/index";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("elitetrade_state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as Record<string, unknown>;
  } catch {
    return undefined;
  }
};

const persistedState = loadState();

const combinedReducers = combineReducers({
  auth: AuthSlice,
  ui: UiSlice,
});

export type RootState = ReturnType<typeof combinedReducers>;

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === "signout/logout") {
    localStorage.removeItem("elitetrade_state");
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  preloadedState: persistedState as RootState | undefined,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

const saveState = (state: RootState) => {
  try {
    localStorage.setItem("elitetrade_state", JSON.stringify(state));
  } catch {
    // ignore quota errors in design preview
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export default store;
