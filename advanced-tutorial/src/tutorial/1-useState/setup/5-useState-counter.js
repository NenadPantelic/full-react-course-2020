import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value+1) -> same as only one click
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase with delay
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
