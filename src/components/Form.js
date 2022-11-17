import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { bookFetch } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
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

  const onChangeCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const onClickAddBook = (e) => {
    e.preventDefault();
    if (document.getElementById('title-input').value !== '' && document.getElementById('author-input').value !== '') {
      dispatch(bookFetch({
        id, title, author, category, progress, currentChapter,
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
        <input name="title-input" id="title-input" type="text" placeholder="Book title" onChange={onChangeTitleHandler} />
        <input name="author-input" id="author-input" type="text" placeholder="Author" onChange={onChangeAuthorHandler} />
        <select name="category-input" id="category-input" onChange={onChangeCategoryHandler}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit" className="add-button" onClick={onClickAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
