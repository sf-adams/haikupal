import { useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  const [haiku, setHaiku] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const handleInput = (event) => {
    setHaiku((prevHaiku) => ({
      ...prevHaiku,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <form className="haiku">
        <Input
          line="line1"
          syllables={5}
          haiku={haiku}
          handleInput={handleInput}
        />
        <Input
          line="line2"
          syllables={7}
          haiku={haiku}
          handleInput={handleInput}
        />
        <Input
          line="line3"
          syllables={5}
          haiku={haiku}
          handleInput={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
