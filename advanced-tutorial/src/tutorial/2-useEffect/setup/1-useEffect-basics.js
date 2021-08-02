import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter -> dependeny list
// side effect - anything that runs outside of the component
const UseEffectBasics = () => {
  // after every setValue call, useState preserves the state between renders, and trigger
  // re-render after value update
  const [value, setValue] = useState(0);

  // 1. empty array of the dependencies -> will run only on the initial render
  // 2. if we omit it, will run on every render
  // 3. if the dependency list is defined, will run only if value of some of the dependencies is changed
  useEffect(() => {
    // this function runs after every render
    console.log("call useEffect");
    document.title = value !== 0 ? `New messages(${value})` : "No messages";
  }, [value]);

  useEffect(() => {
    console.log("init call useEffect");
  }, []);
  // try with [], [value] and nothing
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
