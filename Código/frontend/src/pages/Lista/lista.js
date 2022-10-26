import { useEffect, useState } from "react";
import api from "../../api/service";

function Lista() {
  const [alunos, setAlunos] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    api.get("/api/aluno/listar").then((res) => setAlunos(res.data));
    api.get("/api/empresa/listar").then((res) => setEmpresas(res.data));
  });

  console.log(alunos);
  console.log(empresas);
  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Alunos</h1>
        <div>
          {alunos.map((aluno) => (
            <>
              <a href={`/aluno/:${aluno.id}`}>{aluno.nome}</a>
            </>
          ))}
        </div>
        <h1>Empresas</h1>
        <div>
          {empresas.map((empresa) => (
            <>
              <a href={`/empresa/:${empresa.id}`}>{empresa.cnpj}</a>
            </>
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export default Lista;
