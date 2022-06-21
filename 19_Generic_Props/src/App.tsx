import "./App.css";

import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Daniel", "Julie", "Gaïa", "Amaya"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />

      <List
        items={[
          { fName: "Daniel", lName: "Ouatara" },
          { fName: "John", lName: "Doe" },
          { fName: "Janna", lName: "Doe" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
