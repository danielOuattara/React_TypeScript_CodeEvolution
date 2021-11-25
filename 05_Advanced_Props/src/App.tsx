import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Daniel } from './components/Daniel'
import { Greet } from './components/Greet';


function App() {

  return (
    <div className="App">
      <Status status="loading" />

      <hr />
      <Heading > 
        <p>This is a paragraph</p>
      </Heading>

      <Daniel> 
        <Heading> The next Generation of Web Developper</Heading>
      </Daniel>

      <hr />      
      <Greet name="John Doe" isLoggedIn={false} />

    </div>

  );
}

export default App;
