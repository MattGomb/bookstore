import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({
  id, category, title, author,
}) => (
  <div className="book">
    <div className="book-info">
      <p>{category}</p>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className="actions">
        <button type="button" className="book-button">Comments</button>
        <RemoveBook id={id} />
        <button type="button" className="book-button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <h3>47%</h3>
    </div>
    <div className="book-current">
      <h3>CURRENT CHAPTER</h3>
      <p>Chapter 7</p>
      <button type="button" className="progress-button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
