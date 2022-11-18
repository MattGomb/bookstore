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

/*
export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case FETCH:
      return action.list;
    default:
      return state;
  }
}
// action creators for fetch, add and remove books
export const fetchBook = (list) => ({ type: FETCH, list });
export const fetchBookAsync = () => async (dispatch) => {
  await fetch(URL)
    .then((response) => response.json())
    .then((books) => {
      const list = [];
      Object.keys(books).forEach((key) => {
        list.push({
          id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
      dispatch(fetchBook(list));
    });
};
export const addBook = (payload) => ({
  type: ADD,
  id: payload.id,
  title: payload.title,
  author: payload.author,
  category: payload.category,
});
export const bookFetch = ({
  id, title, author, category,
}) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export const bookRemove = ({ id }) => async (dispatch) => {
    await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch(removeBook(id)));
};
*/
