import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RemoveBook from './RemoveBook';

const Book = ({
  id, category, title, author,
}) => {
  const percentage = Math.floor(Math.random() * 101);
  const chapter = Math.floor(Math.random() * 20 + 1);
  return (
    <div className="book">
      <div className="book-info">
        <p id="category">{category}</p>
        <h1 id="title">{title}</h1>
        <p id="author">{author}</p>
        <div className="actions">
          <button type="button" className="book-button">Comments</button>
          <RemoveBook id={id} />
          <button type="button" className="book-button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <CircularProgressbar id="progress-bar" value={percentage} />
      </div>
      <div className="progress-textholder">
        <h3 className="progress">
          {percentage}
          %
        </h3>
        <p className="progress-text">Completed</p>
      </div>
      <div className="book-current">
        <h3>CURRENT CHAPTER</h3>
        <p>
          Chapter
          {chapter}
        </p>
        <button type="button" className="progress-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
