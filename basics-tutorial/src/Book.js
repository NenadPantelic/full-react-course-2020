const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  console.log("click");
};

const complexExample = (author) => {
  alert(`Author: ${author}`);
};

// {} -> for JS
// {{}} -> for CSS

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
// only one default export per file, but can have multiple named exports
export default Book;
