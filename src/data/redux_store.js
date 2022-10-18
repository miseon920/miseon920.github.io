import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const openmodal = createSlice({
  name: "openmodal",
  initialState: { id: "", toggle: false },
  reducers: {
    showModal: (state, action) => {
      state.id = action.payload.id;
      state.toggle = !state.toggle;
      //console.log(action.payload.id, !state.toggle);
    },
  },
});

export const { showModal } = openmodal.actions;

export const redux_store = configureStore({
  reducer: {
    openmodal: openmodal.reducer,
  },
});

export default redux_store;
