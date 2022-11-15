// actions

const ADD = 'bookstore/src/redux/books/books/ADD';
const REMOVE = 'bookstore/src/redux/books/books/REMOVE';

// reducer

const defaultState = [
  {
    id: 1,
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    progress: '64%',
    currentChapter: 'Chapter 17',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    progress: '8%',
    currentChapter: 'Chapter 3',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    progress: '99%',
    currentChapter: 'Chapter 24',
  },
];

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          progress: action.progress,
          currentChapter: action.currentChapter,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// action creators for add and remove books

export const addBook = (payload) => ({
  type: ADD,
  id: payload.id,
  title: payload.title,
  author: payload.author,
  progress: payload.progress,
  currentChapter: payload.currentChapter,
});

export const removeBook = (payload) => ({
  type: REMOVE,
  id: payload.id,
});
