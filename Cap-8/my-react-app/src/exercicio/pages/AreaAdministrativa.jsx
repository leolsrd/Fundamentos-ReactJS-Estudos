import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AreaAdministrativa = () => {
  const autenticado = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!autenticado) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [autenticado, navigate]);

  return (
    <div>
      {autenticado === true
        ? "Área Administrativa"
        : "Você não tem acesso ao painel adminstrativo, vamos enviar para a home"}
    </div>
  );
};

export default AreaAdministrativa;
