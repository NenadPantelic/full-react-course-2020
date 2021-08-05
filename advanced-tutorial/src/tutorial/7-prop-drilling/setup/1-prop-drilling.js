import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

// how to pass some property deep down the tree -> prop drilling
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Prop drilling</h3>
      {/* functions can also be passed as property */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const Person = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
