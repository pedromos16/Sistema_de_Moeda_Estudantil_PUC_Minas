import { useEffect, useState } from "react";
import api from "../../api/service";

function Aluno() {
  const [aluno, setAluno] = useState({});

  const id = this.props.match.params.id;

  useEffect(() => {
    api.get(`/aluno/${id}`).then((res) => setAluno(res.data));
  });

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Aluno</h1>
        <p>{aluno.nome}</p>
      </div>
    </>
  );
}

export default Aluno;
