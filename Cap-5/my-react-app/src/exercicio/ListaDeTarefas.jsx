// import { useState } from "react";
import { useState } from "react";
import "./style.css";

function ListaDeTarefas() {
  const [listaTarefa, setListaTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const addTarefaLista = () => {
    if (novaTarefa.trim()) {
      setListaTarefa([...listaTarefa, novaTarefa]);
      setNovaTarefa("");
    }
  };

  return (
    <div>
      <br />
      <label className="lb-add-tarefa" htmlFor="add-tarefa">
        Digite sua tarefa
      </label>
      <input
        className="add-lista"
        type="text"
        name="add-lista"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button className="btn-add-tarefa" onClick={addTarefaLista}>
        Add Tarefa
      </button>
      <ul>
        {listaTarefa.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
