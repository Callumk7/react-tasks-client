import { useState } from "react";
import { Task } from "./components";
import { TaskForm } from "./components/tasks/TaskForm";
import { ProjectType, TaskType } from "./types";
import { getTasks, getProjects } from "./utils/api";

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [projects, setProjects] = useState<ProjectType[]>([]);

	// temporary function to test api calls
	const handleClick = async () => {
		const retrievedTasks = await getTasks();
		const retrievedProjects = await getProjects();
		setTasks(retrievedTasks);
		setProjects(retrievedProjects);
	};

	const handleCheckboxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { checked } = event.target;
		console.log(checked);
	};

	return (
		<div className="App">
			<h1>tasks app</h1>
			<TaskForm />
			<button onClick={handleClick}>get all tasks</button>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
}

export default App;
