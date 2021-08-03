import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // // returns the first value if the text is true (non-null, non-empty), otherwise second
  // const firstValue = text || "hello world";
  // // returns the second value if the text is true (non-null, non-empty), otherwise first value
  // const secondValue = text && "hello world";
  return (
    <>
      {/* <h1>First value: {firstValue}</h1>
      <h1>Second value: {secondValue}</h1> */}
      {/* if text is true -> display text
      otherwise John Doe */}
      <h1>{text || "John Doe"}</h1>
      {/* if text is true -> display John Doe
      otherwise nothing */}
      <h1>{text && "John Doe"}</h1>
      {text && <h1>Hello,World!</h1>}
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {isError ? <h1>Error...</h1> : null}
    </>
  );
};

export default ShortCircuit;
