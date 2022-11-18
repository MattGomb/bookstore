import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ob3CSqKLG46FjtXBtUgx/books';

const initialState = [];

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(URL, book);
  if (response.status === 201) {
    return book;
  }
  return response.data;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  axios.delete(`${URL}/${id}`)
    .then((response) => (response.data));
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        // Add book
        state.push(action.payload);
      })
      .addCase(getBooks.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      .addCase(removeBook.fulfilled, (state, action) => {
        state.forEach((book) => {
          if (book.item_id === action.payload) {
            state.splice(state.indexOf(book), 1);
          }
        });
      });
  },
});

export default booksSlice.reducer;
