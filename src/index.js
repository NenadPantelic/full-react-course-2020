import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    title: "The Stranger",
    author: "Albert Camus",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51L54hW47kS._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51-rwApY85L._SX333_BO1,204,203,200_.jpg",
  },
];

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

const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  console.log("click");
};

const complexExample = (author) => {
  alert(`Author: ${author}`);
};

// const Book = ({ title, author, image, children }) => {
const Book = (props) => {
  console.log(props);
  //const { title, author, image } = props;
  // const { title, author, image } = props.book;

  const { title, author, image } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt={title} width="200" height="300" />
      <h1>{title}</h1>
      {props.children}
      <h4>
        {/* style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }} */}
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        Another example
      </button>
    </article>
  );
};

// {} -> for JS
// {{}} -> for CSS

ReactDom.render(<BookList />, document.getElementById("root"));
