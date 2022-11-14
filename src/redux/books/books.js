import Book from '../../components/Book';

// actions

const ADD = 'ADD';
const REMOVE = 'REMOVE';

// reducer

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

// action creators for add and remove books

export const addBook = () => ({
  type: ADD,
  payload: Book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  payload: id,
});
