import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  // when we submit the form, refContainer.current value will
  // hold the value of the input
  // make reference to some DOM node
  // we don't need dependency list, cause useRef doesn't trigger re-render
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  console.log(refContainer);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
