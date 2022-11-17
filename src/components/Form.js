import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { bookFetch } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const id = v4().slice(0, 8);
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
    if (document.getElementById('title-input').value !== '' && document.getElementById('author-input').value !== '' && document.getElementById('category-input').value !== 'Choose') {
      dispatch(bookFetch({
        id, title, author, category,
      }));
      document.getElementById('title-input').value = '';
      document.getElementById('author-input').value = '';
      document.getElementById('category-input').value = 'Choose';
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
          <option value="Choose">choose</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Fantasy">Fantasy</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Science">Science</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="add-button" onClick={onClickAddBook}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
