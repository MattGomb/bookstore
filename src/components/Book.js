import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, progress, currentChapter,
}) => (
  <div className="book">
    <div className="book-info">
      <h1>{title}</h1>
      <p>{author}</p>
      <p>genre</p>
      <h3>title-placeholder</h3>
      <p>author-placeholder</p>
      <div className="actions">
        <button type="button" className="book-button">Comments</button>
        <button type="button" className="book-button" id={id}>Remove</button>
        <button type="button" className="book-button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <h3>{progress}</h3>
    </div>
    <div className="book-current">
      <h3>CURRENT CHAPTER</h3>
      <p>
        chapter
        {currentChapter}
      </p>
      <button type="button" className="progress-button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
};

export default Book;
