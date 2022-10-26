import { useEffect, useState } from "react";
import api from "../../api/service";

function Empresa() {
  const [empresa, setEmpresa] = useState({});

  const id = this.props.match.params.id;

  useEffect(() => {
    api.get(`api/empresa/mostrar/id/${id}`).then((res) => setEmpresa(res.data));
  });

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
