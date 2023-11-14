import { useState, useCallback, useRef } from "react";
import { syllable } from "syllable";
import { toPng } from 'html-to-image';
import Input from "./Input";
import "./App.css";

function App() {
  const [haiku, setHaiku] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const ref = useRef(null)
  
  const handleInput = (event) => {
    setHaiku((prevHaiku) => ({
      ...prevHaiku,
      [event.target.name]: event.target.value,
    }));
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

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
      <form className="haiku" ref={ref}>
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
          handleInput={handleInput}iiii
        />
        <button className="haiku__submit" type="submit" disabled={!validHaiku} onClick={onButtonClick}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
