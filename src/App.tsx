import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";

function App() {
  return (
    <>
      <Input syllables={5} />
      <Input syllables={7} />
      <Input syllables={5} />
      <div>
        <Button content="button" color="blue" />
        <Button content="button" color="purple" />
      </div>
    </>
  );
}

export default App;
