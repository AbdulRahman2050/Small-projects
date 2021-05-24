import React, { useReducer, useState } from "react";
import Modal from "./modal";

const obj = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const reducer = (state, action) => {
  if (action.type === "ENTRY_ADDED") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }
    if (action.type === "REMOVE_PERSON") {
      const newPeople = state.people.filter((person) => {
        return person.id !== action.payload;
      });
      return{
          ...state,
          people: newPeople,
          isModalOpen: true,
          modalContent: "Person removed"

      }
    }
};

const Red = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, obj);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ENTRY_ADDED", payload: newPerson });
    }

    if (!name) {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit">Insert</button>
      </form>
      <div>
        {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      </div>

      <div>
        {state.people.map((person) => {
          const { name, id } = person;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_PERSON", payload: id });
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Red;
