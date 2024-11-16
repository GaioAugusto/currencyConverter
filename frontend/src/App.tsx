import "./App.css";
import { HomePage } from "./components/HomePage";
import { Instructions } from "./components/Instructions";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Instructions />
    </div>
  );
}

export default App;
