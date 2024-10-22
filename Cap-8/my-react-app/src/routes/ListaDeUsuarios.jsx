import { useLocation, useNavigate } from "react-router-dom";

function ListaDeUsuarios() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const pagina = queryParams.get("pagina") || "1";
  // const ordem = queryParams.get("ordem") || "ascendente";

  const irParaProximaPagina = () => {
    queryParams.set("pagina", (parseInt(pagina) + 1).toString());
    // queryParams.get("pagina");
    navigate(location.pathname + "?" + queryParams.toString());
  };

  return (
    <div>
      <h1>Lista de Uusários</h1>
      <p>Página Atual: {pagina}</p>
      <button onClick={irParaProximaPagina}>Próxima página</button>
    </div>
  );
}

export default ListaDeUsuarios;
