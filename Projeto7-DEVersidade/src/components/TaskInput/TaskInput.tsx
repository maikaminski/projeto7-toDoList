import { useState } from "react";
function TaskInput() {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState<string[]>([]);

	function handleAddTask() {
		if (task.trim() === "") return;
		setTasks([...tasks, task]);
		setTask("");
	}

	return (
		<div>
			<input 
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Digite aqui a nova tarefa..."
			/>
			<button onClick={handleAddTask}>Adicionar</button>
		</div>
	)
}

export default TaskInput;