import { syllable } from "syllable";

export default function Input(props) {
  const { line, syllables, haiku, handleInput } = props;
  const isSyllableCountCorrect = syllable(haiku[line]) === syllables;

  return (
    <input
      className={`haiku__line ${isSyllableCountCorrect ? 'correct' : 'incorrect'}`}
      type="text"
      name={line}
      id={line}
      value={haiku[line]}
      onChange={handleInput}
    />
  );
}
