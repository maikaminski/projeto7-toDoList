// TaskList.tsx - PARTE 1: Definir a interface das props
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];         
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;  
}