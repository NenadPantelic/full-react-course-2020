import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="button" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // we need cleanup function, because when we toggle the component
    // we seek for re-render, so we use cleanup to have only one event listener
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h1>Width:{width}</h1>
    </div>
  );
};
export default ShowHide;
