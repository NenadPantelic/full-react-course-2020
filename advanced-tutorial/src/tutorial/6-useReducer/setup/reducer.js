// reducer function
// state -> oldstate
// action -> what action to perform
// always must return the state
export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_ITEM":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
      };

    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please, enter the name!",
      };

    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };

    case "REMOVE_ITEM":
      const filteredPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: filteredPeople };

    default:
      throw new Error("No matching action type!");
    // return state;
  }
};
