import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "usuario") {
      navigate("/pagina-protegida");
    } else {
      alert("Usuário não autenticado");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome-usuario">
          Nome de usuário:
          <input
            type="text"
            name="nome-usuario"
            id="nome-usuario"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button type="submit">ACESSAR</button>
      </form>
    </div>
  );
}

export default Login;
