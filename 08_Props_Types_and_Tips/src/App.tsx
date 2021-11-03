import React from 'react';
import './App.css';
import { Container } from './components/Container.tsx'
import { Person } from './components/Person.tsx';
import { Input } from './components/Input.tsx';



function App() {

  const styles = {
    border: "2px solid grey", 
    padding: '2rem', 
    margin: '2rem',
  }

  return (
    <div className="App">
      <Person />
      <Input />
      <Container styles={{ border: "2px solid grey", padding: '2rem', margin: '2rem' }}/>
      <Container styles={styles}/>
    </div>

  );
}

export default App;
