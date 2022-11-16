import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// root reducer
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

// store
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
