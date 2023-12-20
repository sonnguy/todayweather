import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "./searchHistoryReducer";
import { saveState } from "../services/localStorageService";

const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
