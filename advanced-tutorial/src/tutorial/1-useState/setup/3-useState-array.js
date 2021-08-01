import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // leave only those persons whose id does not match the id of the clicked person
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      {/* we need arrow function here, so the handler will be called only when the button is clicked, not on the load */}
      <button type="button" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
