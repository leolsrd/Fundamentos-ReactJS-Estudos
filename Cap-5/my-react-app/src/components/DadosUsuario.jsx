/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function DadosUsuario({ userId = 1 }) {
  const [usuario, setUsuaruio] = useState(null);

  useEffect(() => {
    fetch(`/api/usuarios/${userId}`)
      .then((response) => response.json())
      .then((data) => setUsuaruio(data));
  }, [userId]);

  if (!usuario) {
    return "Carregando...";
  }

  return <div>{usuario.nome}</div>;
}

export default DadosUsuario;
