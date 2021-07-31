import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51L54hW47kS._SX322_BO1,204,203,200_.jpg"
    alt="The Stranger - Alber Camus"
    width="200"
    height="300"
  />
);

const Title = () => <h1>The Stranger</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Albert Camus
  </h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));
