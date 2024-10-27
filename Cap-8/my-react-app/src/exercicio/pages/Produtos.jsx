import { Link } from "react-router-dom";

function Produtos() {
  let categorias = [
    { id: 1, categoria: "Eletrônicos", categoriaPath: "eletronicos" },
    { id: 2, categoria: "Roupas", categoriaPath: "roupas" },
    { id: 3, categoria: "Alimentos", categoriaPath: "alimentos" },
  ];

  function montarRota(categoria) {
    let rotaMontada = "/produtos/" + categoria;
    return rotaMontada;
  }
  return (
    <>
      <div>
        <h1>Produtos</h1>
      </div>

      <h2>Categoria dos Produtos</h2>

      {categorias.map((e) => (
        <Link to={montarRota(e.categoriaPath)} key={e.id}>
          {e.categoria} {"| "}
        </Link>
      ))}
    </>
  );
}

export default Produtos;
