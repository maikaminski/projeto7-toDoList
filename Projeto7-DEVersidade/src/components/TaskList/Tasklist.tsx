import React from "react";
//import TaskItem from "../TaskItem/TaskItem";
//import styles from './Tasklist.module.css';

// Tipo da tarefa
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

// Tipo das props que o TaskList recebe
interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>
          Nenhuma tarefa ainda. Adicione uma para começar! ✨
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;