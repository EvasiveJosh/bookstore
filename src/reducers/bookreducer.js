import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import bookArray from "../assets/array";

const bookSlice = createSlice({
  name: "books",
  initialState: bookArray,
  reducers: {
    createBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      const idx = state.findIndex((book) => book.id === action.payload.id);
      if (idx !== -1) state.splice(idx, 1);
    },
    editBook(state, action) {
        const { id, field, value } = action.payload
        const book = state.find(book => book.id === id)
        if (book) book[field] = value
    }
  },
});

export const { createBook, removeBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
