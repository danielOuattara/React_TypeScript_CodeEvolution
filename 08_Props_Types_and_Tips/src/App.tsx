import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { Person } from "./components/Person";
import { Input } from "./components/Input";
import { PersonalitiesList } from "./components/PersonalitiesList";
import { PersonalitiesList2 } from "./components/PersonalitiesList2";

function App() {
  const person = {
    // obj to be passed as prop.
    firstName: "Daniel",
    lastName: "Ouattara",
  };

  const hobbies = ["swimming", "flying", "painting", "riding"];

  const personalitiesList = [
    { id: 1, firstName: "Nelson", lastName: "Mandela" },
    { id: 2, firstName: "Thomas", lastName: "Sankara" },
    { id: 3, firstName: "Fidele", lastName: "Castro" },
  ];

  const styles = {
    border: "2px solid grey",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div className="App">
      <Person person={person} hobbies={hobbies} />
      <hr />
      <PersonalitiesList names={personalitiesList} />
      <hr />
      <PersonalitiesList2 names={personalitiesList} />
      <hr />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{ border: "2px solid grey", padding: "2rem", margin: "2rem" }}
      />
      <Container styles={styles} />
    </div>
  );
}

export default App;
