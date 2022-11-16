import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../redux/books/books';

const RemoveBook = (id) => {
  const dispatch = useDispatch();
  const onClickRemoveBook = () => {
    dispatch(bookRemove(id));
  };
  return (
    <button type="button" className="book-button" onClick={onClickRemoveBook}>
      Remove
    </button>
  );
};

export default RemoveBook;
