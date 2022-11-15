import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = (e) => {
    dispatch(checkStatus());
    e.currentTarget.classList.toggle('add-button');
  };

  return (
    <section className="categories-container">
      <button type="button" onClick={onClickStatus}>Check Status</button>
      <p>{categories}</p>
    </section>
  );
}

export default Categories;
