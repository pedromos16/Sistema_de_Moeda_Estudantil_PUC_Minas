import { useEffect, useState } from "react";
import api from "../../api/service";

function Empresa() {
  const [aluno, setAluno] = useState({});

  const id = this.props.match.params.id;

  useEffect(() => {
    api.get(`api/empresa/mostrar/id/${id}`).then((res) => setAluno(res.data));
  });

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Aluno</h1>
        <p>{aluno.cnpj}</p>
      </div>
    </>
  );
}

export default Empresa;
