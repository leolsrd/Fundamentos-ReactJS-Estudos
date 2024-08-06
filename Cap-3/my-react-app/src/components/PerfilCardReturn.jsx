const perfilCard = (
  <div className="perfil-card">
    <br />
    <img
      src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
      alt="Foto do Doguinho"
      className="perfil-imagem"
      style={{ width: "100px" }}
    />
    <h2>Nome do Doguinho: Thunder</h2>
    <p>Doguinho é um bom companheiro</p>
  </div>
);

function perfilCardReturn() {
  return perfilCard;
}

export default perfilCardReturn;
