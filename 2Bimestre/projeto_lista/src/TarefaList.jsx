import TarefaItem from "./TarefaItem"

export default function TarefaList({ tarefas, onConcluir, onRemover }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
          onRemover={onRemover}
        />
      ))}
    </ul>
  )
}
