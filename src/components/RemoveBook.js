import React from 'react';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const idToBeFixed = id;
  const idFix = idToBeFixed.id;
  const onClickRemoveBook = () => {
    dispatch(removeBook(idFix));
    setTimeout(() => {
      dispatch(getBooks());
    }, 500);
  };
  return (
    <button type="button" className="book-button" onClick={onClickRemoveBook}>
      Remove
    </button>
  );
};

export default RemoveBook;
