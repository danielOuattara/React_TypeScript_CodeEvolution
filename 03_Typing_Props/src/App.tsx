import "./App.css";
import { Greet } from "./components/Greet";
import GreetClass from "./components/GreetClass";

function App() {
  return (
    <div className="App">
      <Greet name="Daniel" />
      <Greet name={10} />
      <GreetClass name="John Doe" />
    </div>
  );
}

export default App;
