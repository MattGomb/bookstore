import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = v4().slice(0, 10);
  const progress = Math.floor(Math.random() * 100);
  const currentChapter = Math.floor(Math.random() * 10);
  const dispatch = useDispatch();

  const onChangeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onClickAddBook = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(addBook({
        id, title, author, progress, currentChapter,
      }));
      document.getElementById('title-input').value = '';
      document.getElementById('author-input').value = '';
    }
  };

  return (
    <section className="form-container">
      <h2 className="form-title">
        ADD NEW BOOK
      </h2>
      <form className="form">
        <input id="title-input" type="text" placeholder="Book title" onChange={onChangeTitleHandler} />
        <input id="author-input" type="text" placeholder="Author" onChange={onChangeAuthorHandler} />
        <button type="submit" className="add-button" onClick={onClickAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
