type Todo = {
  id: number;
  text: string;
};

type Props = {
  todos: Todo[];
  onRemove: (id: number) => void;
};

export default function TodoList({ todos, onRemove }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onRemove(todo.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}
