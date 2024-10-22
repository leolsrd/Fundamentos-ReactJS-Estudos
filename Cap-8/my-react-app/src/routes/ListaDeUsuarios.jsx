import { useLocation } from "react-router-dom";

function ListaDeUsuarios() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pagina = queryParams.get("pagina") || "1";
  const ordem = queryParams.get("ordem") || "ascendente";

  return (
    <div>
      <h1>Lista de Uusários</h1>
      <p>Página Atual: {pagina}</p>
      <p>Ordem: {ordem}</p>
    </div>
  );
}

export default ListaDeUsuarios;
