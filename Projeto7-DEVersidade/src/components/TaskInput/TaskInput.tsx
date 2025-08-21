import { useState } from "react";
import styles from "./TaskInput.module.css"

interface TaskInputProps {
	onAddTask: (title: string) => void;
}
function TaskInput({ onAddTask }: TaskInputProps) {
	const [task, setTask] = useState("");

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (task.trim() === "") return;
		onAddTask(task.trim());
		setTask("");
	}

	return (
		<form className={styles.taskInput} onSubmit={handleSubmit}>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Digite aqui a nova tarefa..."
			/>
			<button type="submit">Adicionar</button>
		</form>
	)
}

export default TaskInput;