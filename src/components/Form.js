import React from 'react';

function Form() {
  return (
    <section className="form-container">
      <h2 className="form-title">
        ADD NEW BOOK
      </h2>
      <form className="form">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit" className="add-button">ADD BOOK</button>
      </form>
    </section>
  );
}

export default Form;
