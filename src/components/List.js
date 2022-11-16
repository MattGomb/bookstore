import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBookAsync } from '../redux/books/books';

function List() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookAsync());
  }, [dispatch]);

  return (
    <section className="list-container">
      <div className="list">
        {books.map((book) => (
          <Book
            key={book.id}
            id={`${book.id}`}
            title={book.title}
            author={book.author}
            progress={book.progress}
            currentChapter={book.currentChapter}
          />
        ))}
      </div>
      <span className="divider" />
    </section>
  );
}

export default List;
