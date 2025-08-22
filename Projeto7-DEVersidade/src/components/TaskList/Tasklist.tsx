//Definir a interface das props
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[]; 
}

function TaskList({ tasks}: TaskListProps) {
  
  // mensagem amigável se lista vazia
  if (tasks.length === 0) {
    return(
      <div>
        <p>Você ainda não tem tarefas cadastradas.</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        );
      }

  //receber tasks via props
  //renderizar tarefas
  return (
    <div>
      <h3> Suas Tarefas: </h3>
      <p>Total de tasks:{tasks.length}</p>

      {tasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            readOnly
          />
          <span>
              {task.title}
            </span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;