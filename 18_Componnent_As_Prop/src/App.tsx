import "./App.css";
import { Login } from "./components/auth/Login";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Counter from "./components/class/Counter";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
