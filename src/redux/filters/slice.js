import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload || "";
    },
  },
});

export const filtersReduser = filtersSlice.reducer;

export const { setNameFilter } = filtersSlice.actions;
