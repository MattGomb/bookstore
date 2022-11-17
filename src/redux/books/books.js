// specific external API

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ob3CSqKLG46FjtXBtUgx/books';

// actions

const ADD = 'bookstore/src/redux/books/books/ADD';
const REMOVE = 'bookstore/src/redux/books/books/REMOVE';
const FETCH = 'FETCH';

// reducer

const defaultState = [];

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
          progress: action.progress,
          currentChapter: action.currentChapter,
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
    .then((response) => response)
    .then((books) => {
      const list = [];
      Object.keys(books).forEach((key) => {
        list.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
          progress: books[key][0].progress,
          currentChapter: books[key][0].currentChapter,
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
  progress: payload.progress,
  currentChapter: payload.currentChapter,
});

export const bookFetch = ({
  id, title, author, category, progress, currentChapter,
}) => async (dispatch) => {
  const newBook = {
    id,
    title,
    author,
    category,
    progress,
    currentChapter,
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

export const removeBook = (payload) => ({
  type: REMOVE,
  id: payload.id,
});

export const bookRemove = (id) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch(removeBook({ id })));
};
