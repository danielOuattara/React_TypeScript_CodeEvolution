import "./../App.css";
import { Box } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import { User } from "./context/User";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br />
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
