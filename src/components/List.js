import React from "react";
import Book from "./Book";

function List() {
  return (
    <section className="list-container">
      <div className="list">
        <Book />
        <Book />
        <Book />
      </div>
      <span className="divider"></span>
    </section>
  );
}

export default List;