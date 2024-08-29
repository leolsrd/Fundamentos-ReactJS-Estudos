import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  // * Atualizando 3 anos na idade a cada click do mouse
  // function handleOneClickAddThreeAge() {
  //   setAge((a) => a + 1);
  //   setAge((a) => a + 1);
  //   setAge((a) => a + 1);
  // }

  function handleClickAddAge() {
    setAge(age + 1);
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClickAddAge}>Aumentar idade</button>
      <button onClick={() => setAge(age - 1)}>Diminuir idade</button>
      <p>
        Olá, {name}. Sua idade é {age}
      </p>
    </>
  );
}

export default MyForm;
