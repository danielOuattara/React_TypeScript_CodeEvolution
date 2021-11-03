import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';


function App() {

  const styles = {
    border: "2px solid grey", 
    padding: '2rem', 
    margin: '2rem',
  }

  return (
    <div className="App">
      <Container styles={{ border: "2px solid grey", padding: '2rem', margin: '2rem' }}/>
      <Container styles={styles}/>
      
      <hr />
      <LoggedIn />

      <hr />
      <User/>
    </div>

  );
}

export default App;
