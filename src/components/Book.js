import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </div>
  );
}

export default Book;