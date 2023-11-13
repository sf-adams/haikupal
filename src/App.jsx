import { useState } from "react";
import { syllable } from "syllable";
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

  const validHaiku =
    syllable(haiku.line1) === 5 &&
    syllable(haiku.line2) === 7 &&
    syllable(haiku.line3) === 5;

  return (
    <main>
      <div className="intro">
        <h2 className="intro__title">🇯🇵 Haikupal</h2>
        <p className="intro__text">
          5-7-5 is your new best friend. Enter your haiku, generate an
          image and share your masterpiece.
        </p>
      </div>
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
        <button className="haiku__submit" type="submit" disabled={!validHaiku} onClick={() => console.log("Generate")}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
