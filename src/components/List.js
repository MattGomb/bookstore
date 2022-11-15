import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function List() {
  const books = useSelector((state) => state.books);
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
