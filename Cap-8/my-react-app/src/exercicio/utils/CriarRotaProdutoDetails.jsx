/**
 * Essa função recebe a categoria e o idProduto Produto
 * Lista e devolve uma rota montada para
 * /produtos-details/categoria/idProduto
 * @param {String} categoria
 * @param {Number} idProduto
 * @returns
 */
function CriarRotaProdutoDetails(categoria, idProduto) {
  console.log(`id: ${idProduto}`);
  let rotaMontada = "/produtos-details/" + categoria + "/" + idProduto;
  console.log(`Rota montada: ${rotaMontada}`);

  return rotaMontada;
}

export default CriarRotaProdutoDetails;
