import React from 'react';
import './App.css';
import { Container } from './components/Container';


function App() {

  const styles = {
    border: "2px solid grey", 
    padding: '2rem', 
    margin: '2rem',
    color: "blue",
    fontSize: "2em"
  }

  return (
    <div className="App">
      <Container styles={{ border: "2px solid grey", padding: '2rem', margin: '2rem' }}/>
      <Container styles={styles}/>
    </div>

  );
}

export default App;
