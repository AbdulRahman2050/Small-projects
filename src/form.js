import React, { useState, useRef } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: " ", age: " ", email: " " });
  const [people, setPeople] = useState([]);
  const persons = useRef({ name: " ", age: " ", email: " " });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const sub = (event) => {
    event.preventDefault();

    const newPerson = { ...person };
    setPeople([...people, newPerson]);
    setPerson({ name: " ", age: " ", email: " " });

    console.log(people);
  };

  return (
    <>
      <form onSubmit={sub}>
        <input type="text" name="name" ref={persons.name} />
        <input type="text" name="age" ref={persons.age} />
        <input type="text" name="email" ref={persons.email} />
        <button type="submit">Submit</button>
      </form>

      <>
        {people.map((p) => {
          const { name, age, email } = p;
          return (
            <>
              <h1>{name}</h1>
              <h2>{age}</h2>
              <h3>{email}</h3>
            </>
          );
        })}
      </>
    </>
  );
};

export default Form;
