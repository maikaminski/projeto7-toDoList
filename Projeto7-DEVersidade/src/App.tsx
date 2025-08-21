import { useState } from 'react'
import TaskInput from './components/TaskInput/TaskInput'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

interface Task {
  id: number;
  title:string;
  completed: boolean;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(title:string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className='app'>
      <Header />
    <Title>ToDo List DEVersidade</Title>
     <main>
        <TaskInput onAddTask={handleAddTask} />
      </main>
    <Footer />
    </div>
  )
}

export default App