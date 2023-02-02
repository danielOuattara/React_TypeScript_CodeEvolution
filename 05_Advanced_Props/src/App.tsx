import "./App.css";
import { Status } from "./components/Status";
import { Heading, Heading2 } from "./components/Heading";
import { Daniel } from "./components/Daniel";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Status status="success" />
      <Status status="error" />

      <hr />

      <Heading>This is a pure text as children</Heading>
      <Heading2>This is a pure text as children</Heading2>

      <Heading>
        <p>This is a paragraph as children</p>
      </Heading>
      <Heading2>
        <p>This is a paragraph as children</p>
      </Heading2>

      <hr />

      <Daniel>
        <Heading> The next Generation of Web Developper</Heading>
      </Daniel>
      <Daniel>
        <Heading2> The next Generation of Web Developper</Heading2>
      </Daniel>

      <hr />

      <Greet name="John Doe" isLoggedIn={false} />
    </div>
  );
}

export default App;
