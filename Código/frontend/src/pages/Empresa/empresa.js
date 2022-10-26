import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/service";

function Empresa() {
  const [empresa, setEmpresa] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.get(`api/empresa/mostrar/id/${id}`).then((res) => setEmpresa(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Empresa</h1>
        <p>{empresa.cnpj}</p>
      </div>
    </>
  );
}

export default Empresa;
