import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

function List() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section className="list-container">
      <div className="list">
        {books.map((book) => (
          <Book
            key={`${book.item_id}`}
            id={`${book.item_id}`}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <span className="divider" />
    </section>
  );
}

export default List;
