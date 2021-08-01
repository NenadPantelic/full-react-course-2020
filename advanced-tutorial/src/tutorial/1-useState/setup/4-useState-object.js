import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random message",
  });

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random message");
  const changeMessage = () => {
    setMessage("New message");
  };

  const changeMessageWithSpread = () => {
    setPerson({ ...person, message: "New message" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessageWithSpread}>
        Change message with spread
      </button>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
