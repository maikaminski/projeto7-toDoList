import { useState } from 'react';
import './App.css';
import TaskFilter from'./components/taskFilter';

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar React", completed: false },
    { id: 2, text: "Fazer To-Do List", completed: true },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4 text-red-600">To-Do List</h1> 

      {/* TaskFilter */}
      <TaskFilter currentFilter={filter} onChangeFilter={setFilter} />

      {/* Lista */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between mb-2">
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
