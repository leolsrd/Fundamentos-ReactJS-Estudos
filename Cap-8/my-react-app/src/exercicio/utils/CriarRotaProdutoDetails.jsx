/**
 * Essa função recebe a categoria e o idProduto Produto
 * Lista e devolve uma rota montada para
 * /produtos-details/categoria/idProduto
 * @param {String} categoria
 * @param {Number} idProduto
 * @returns
 */
function CriarRotaProdutoDetails(categoria, idProduto) {
  let rotaMontada = "/produtos-details/" + categoria + "/" + idProduto;

  return rotaMontada;
}

export default CriarRotaProdutoDetails;
