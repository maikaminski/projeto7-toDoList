import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  // alguns todos fictícios
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Ir ao supermercado", completed: false },
    { id: 2, text: "Estudar React", completed: false },
    { id: 3, text: "Treinar no ginásio", completed: true },
  ]);

  // Função para remover pelo id
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>TodoList (SPA)</h1>
      {/* componente para remover tarefa*/}
      <TodoList todos={todos} onRemove={removeTodo} />
    </>
  );
}

export default App;
