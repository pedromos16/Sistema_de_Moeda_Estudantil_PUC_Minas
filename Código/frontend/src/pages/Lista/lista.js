import { useEffect, useState } from "react";
import api from "../../api/service";

function Lista() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    api.get("/aluno").then((res) => setAlunos(res.data));
    api.get("/professor").then((res) => setProfessores(res.data));
  });

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
        <h1>Professores</h1>
        <div>
          {professores.map((professor) => (
            <>
              <a href={`/professor/:${professor.id}`}>{professor.nome}</a>
            </>
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export default Lista;
