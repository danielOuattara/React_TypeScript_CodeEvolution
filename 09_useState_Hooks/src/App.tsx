import './App.css';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';


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
    </div>

  );
}

export default App;
