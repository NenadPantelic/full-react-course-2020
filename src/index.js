import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const firstBook = {
  title: "The Stranger",
  author: "Albert Camus",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51L54hW47kS._SX322_BO1,204,203,200_.jpg",
};
const secondBook = {
  title: "Anna Karenina",
  author: "Leo Tolstoy",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51-rwApY85L._SX333_BO1,204,203,200_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptatum impedit expedita quae quidem voluptatem praesentium est
          dolore eligendi animi!
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
    </section>
  );
};

// must name it children

// const Book = ({ title, author, image, children }) => {
const Book = (props) => {
  console.log(props);
  const { title, author, image } = props;
  return (
    <article className="book">
      <img
        src={image}
        alt="The Stranger - Alber Camus"
        width="200"
        height="300"
      />
      <h1>{title}</h1>
      {props.children}
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      {/* {console.log(props)} */}
    </article>
  );
};

// {} -> for JS
// {{}} -> for CSS

ReactDom.render(<BookList />, document.getElementById("root"));
