import "./App.css";
import { Choice } from "./Choice.tsx";

function App() {
  return (
    <div className="container">
      <span className="title">Which is your favorite color?</span>
      <Choice />
    </div>
  );
}

export default App;
