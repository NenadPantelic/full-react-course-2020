import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("in useEffect");
    // invoked after render -> last thing in useEffect
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []); // it is solved just with [] as a depenendency list
  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{width}px</h2>
    </>
  );
};

export default UseEffectCleanup;
