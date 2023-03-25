import { useEffect, useState } from "react";
import { Task } from "./components";
import { TaskForm } from "./components/tasks/TaskForm";
import { ProjectType, TaskType } from "./types";
import { getTasks, getProjects, updateTask } from "./utils/api";

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [projects, setProjects] = useState<ProjectType[]>([]);

	useEffect(() => {
		getTasks().then((tasks) => setTasks(tasks));
	}, []);

	const handleCheckboxToggle = () => {};

	// function to update task list with a new task
	const addTask = (task: TaskType) => {
		setTasks([...tasks, task]);
	};

	let tempKey = 0;

	return (
		<div className="App">
			<h1>tasks app</h1>
			<TaskForm addTask={addTask} />
			{tasks.map((task) => {
				tempKey++;
				return (
					<Task
						key={tempKey}
						task={task}
						handleCheckboxToggle={handleCheckboxToggle}
					/>
				);
			})}
		</div>
	);
}

export default App;
