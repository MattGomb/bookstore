import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({
  id, title, author, progress, currentChapter,
}) => (
  <div className="book">
    <div className="book-info">
      <p>genre</p>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className="actions">
        <button type="button" className="book-button">Comments</button>
        <RemoveBook id={id} />
        <button type="button" className="book-button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <h3>
        {progress}
        %
      </h3>
    </div>
    <div className="book-current">
      <h3>CURRENT CHAPTER</h3>
      <p>
        Chapter
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
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
