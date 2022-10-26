import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/service";

function Aluno() {
  const [aluno, setAluno] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api.get(`/aluno/mostrar/id/${id}`).then((res) => setAluno(res.data));
  }, [id]);

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
