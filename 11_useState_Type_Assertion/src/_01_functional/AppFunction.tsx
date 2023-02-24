import "./../App.css";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <LoggedIn />
      <br />
      <User />
    </div>
  );
}

export default App;
