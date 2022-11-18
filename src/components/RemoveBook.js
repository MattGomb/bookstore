import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const onClickRemoveBook = () => {
    console.log(dispatch(removeBook(id)));
    dispatch(removeBook(id));
  };
  return (
    <button type="button" className="book-button" onClick={onClickRemoveBook}>
      Remove
    </button>
  );
};

export default RemoveBook;
