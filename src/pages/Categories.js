import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onClickStatus = () => {
    dispatch(checkStatus());
    const msg = document.querySelector('.msg');
    msg.style.display = msg.style.display === 'none' ? '' : 'none';
  };

  return (
    <section className="categories-container">
      <button type="button" className="add-button" onClick={onClickStatus}>Check Status</button>
      <p className="msg">{categories}</p>
    </section>
  );
}

export default Categories;
