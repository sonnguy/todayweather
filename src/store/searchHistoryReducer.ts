import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchHistory } from "../types/types";
import { loadState } from "../services/localStorageService";
import { SEARCHED_ITEMS } from "../constants/reducers";
import { sortArrayByDate } from "../services/utilsService";

interface ItemsState {
  searchedItems: ISearchHistory[];
}

const persistedState = loadState();

const initialState: ItemsState = {
  searchedItems: persistedState?.searchHistory?.searchedItems || [],
};

const searchedItemsSlice = createSlice({
  name: SEARCHED_ITEMS,
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ISearchHistory>) => {
      state.searchedItems.push(action.payload);
      state.searchedItems = sortArrayByDate(
        state.searchedItems,
        "searchedTime"
      );
    },
    deleteItem: (state, action: PayloadAction<ISearchHistory>) => {
      state.searchedItems = state.searchedItems.filter(
        (item) => item.weather.id !== action.payload.weather.id
      );
    },
    updateItem: (state, action: PayloadAction<ISearchHistory>) => {
      const { id } = action.payload.weather;
      const index = state.searchedItems.findIndex((item) => item.weather.id === id);
      if (index) {
        state.searchedItems[index] = action.payload;
      }
      state.searchedItems = sortArrayByDate(
        state.searchedItems,
        "searchedTime"
      );
    },
  },
});

export const { addItem, deleteItem, updateItem } = searchedItemsSlice.actions;
export default searchedItemsSlice.reducer;
