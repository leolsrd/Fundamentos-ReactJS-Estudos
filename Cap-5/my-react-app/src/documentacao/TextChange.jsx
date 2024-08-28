import { useState } from "react";

function TextChange() {
  const [text, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <p>Você digitou: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

export default TextChange;
