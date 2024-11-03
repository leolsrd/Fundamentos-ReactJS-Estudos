import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext2 } from "../contexts/ThemeContext2";

function ComponenteFilho() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext2);

  return (
    <>
      <div>Componente Filho</div>
      <p>Nome do usuário: {user.name}</p>
      <p>Tema atual: {theme.theme}</p>
    </>
  );
}

export default ComponenteFilho;
