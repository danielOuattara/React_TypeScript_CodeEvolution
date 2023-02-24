import "./../App.css";
import { Box } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
