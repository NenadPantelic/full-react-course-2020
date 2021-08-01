import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// for js files, there is no need for .js in the name of the file
// must be the same name as in the original file
import { books } from "./resources/books";
// can be imported with any name we want -> it is the only default export in that file
import Book from "./Book";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // const { id, title, author, image } = book;
        //return <Book key={id} title={title} author={author} image={image} />;
        // not good for use-cases where the list is dynamically changed - add elements, remove them
        // return <Book key={index} book={book} />;
        return <Book key={index} {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
