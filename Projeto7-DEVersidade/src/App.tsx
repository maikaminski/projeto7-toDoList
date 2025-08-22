import { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id: number) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Title>ToDo List DEVersidade</Title>

      <main>
        <TaskInput onAddTask={handleAddTask} />

        <div className="contador-tarefas">
          <p>Total de tarefas: {tasks.length}</p>
          <p>Pendentes: {tasks.filter(task => !task.completed).length}</p>
          <p>Concluídas: {tasks.filter(task => task.completed).length}</p>
        </div>

        <ul className="lista-tarefas">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'concluida' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
              />
              {task.title}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default App;
