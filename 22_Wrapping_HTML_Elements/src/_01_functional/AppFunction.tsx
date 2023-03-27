import "./../App.css";
import CustomButton from "./components/html/Button";

export default function AppFunction() {
  return (
    <div className="App">
      <h2>Functional Component</h2>
      <CustomButton variant="primary" />
    </div>
  );
}
