import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  const { setUserName, setShowProfile } = useContext(LoginContext);
  console.log(`User name: ${setUserName}`);

  const handleUsuario = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  return (
    <>
      <input type="text" name="usuario" id="usuario" onChange={handleUsuario} />
      <br />
      <input type="text" name="senha" id="senha" />
      <br />
      <button onClick={() => setShowProfile(true)}>Login</button>
    </>
  );
}

export default Login;
