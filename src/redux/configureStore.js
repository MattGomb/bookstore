import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// root reducer
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

// store
const store = configureStore(rootReducer);

store.getState();
