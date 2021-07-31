import React from "react";
import ReactDom from "react-dom";
// React component name is capitalized in order to be rendered
// something must be returned
function Greeting() {
  return (
    <div>
      <h3>I'm Nenad</h3>
      <h4>This is my first component</h4>
    </div>
  );
}
/*
JSX rules:
1. return single element
2. div/section/article of Fragment
3. use camelCase for html attribute
4. className insted of class
5. close every element
6. formatting
*/

const Greeting2 = () => {
  // 1. HTML element
  // 2. props
  // 3. children of the element
  //return React.createElement("h1", {}, "Hello, World!");
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello, World!")
  );
};

const Greeting3 = () => {
  return (
    // React fragment
    <>
      <div>
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href="#"> hello world</a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Greeting4 = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};
const Person = () => <h2>Nenad</h2>;
const Message = () => <p>This is my message</p>;
// we need self-closing tag for elements that do not have closing tag
// ReactDom.render(<Greeting />, document.getElementById("root"));
//ReactDom.render(<Greeting2 />, document.getElementById("root"));
//ReactDom.render(<Greeting3 />, document.getElementById("root"));
ReactDom.render(<Greeting4 />, document.getElementById("root"));
