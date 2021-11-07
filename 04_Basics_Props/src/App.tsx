import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonalitiesList } from './components/PersonalitiesList';
import { HobbiesList } from './components/HobbiesList';


function App() {

  const person = {
    firstName: "Daniel",
    lastName: "Ouattara",
  };

  const hobbies = ["swimming", "flying", "painting", "riding"];

  const personalitiesList = [
    {
      id: 1,
      firstName: "Nelson",
      lastName: "Mandela",
    },
    {
      id: 2,
      firstName: "Thomas",
      lastName: "Sankara",
    },
    {
      id: 3,
      firstName: "Fidele",
      lastName: "Castro",
    },
  ];

  return (
    <div className="App">
      <Greet name='Daniel' messageCount={10} isLoggedIn={false} />

      <hr />
      <Person person={person} hobbies={hobbies}/>

      <hr />
      <HobbiesList hobbies={hobbies} />

      <hr />
      <PersonalitiesList names={personalitiesList} />

    </div>
  );
}

export default App;
