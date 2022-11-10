import React from 'react';

function Book(title, author) {
  return (
    <div className="book">
      <div className="book-info">
        <h1>{title}</h1>
        <p>{author}</p>
        <p>genre</p>
        <h3>title-placeholder</h3>
        <p>author-placeholder</p>
        <div className="actions">
          <button type="button" className="book-button">Comments</button>
          <button type="button" className="book-button">Remove</button>
          <button type="button" className="book-button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <h3>PROGRESS PLACEHOLDER</h3>
      </div>
      <div className="book-current">
        <h3>CURRENT CHAPTER</h3>
        <p>chapter placeholder</p>
        <button type="button" className="progress-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
