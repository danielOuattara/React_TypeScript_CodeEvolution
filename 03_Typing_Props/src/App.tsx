import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Daniel' />
      {/* <Greet name={10} /> */}
    </div>
  );
}

export default App;
