import React, { useState } from "react";
// useState function:
// 1. state value
// 2. setter function -> handle state value setting
// useState(<default-value>)
const UseStateBasics = () => {
  // console.log(useState("Hello, World!"));
  // const [state, setTitle] = useState("Hello, World!");
  // console.log(state);
  // console.log(setTitle());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value);
  // console.log(handler);

  const [title, setTitle] = useState("Random title");
  const handleClick = () => {
    let newTitle = title;
    if (newTitle === "Random title") {
      newTitle = "Hello, World!";
    } else {
      newTitle = "Random title";
    }
    setTitle(newTitle);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

/*
General hooks rules:
1. use -> useState, useEffect, useCallback, useMemo...
2. component name must be uppercase - where the hook is invoked
3. must be in the function/component body
4. cannot call conditionally

*/

export default UseStateBasics;
