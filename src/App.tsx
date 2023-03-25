import { useState } from "react";
import { Task } from "./components";
import { getTasks, getProjects } from "./utils/api";

function App() {
	const [tasks, setTasks] = useState([]);
	const [projects, setProjects] = useState([]);

	// temporary function to test api calls
	const handleClick = async () => {
		const retrievedTasks = await getTasks();
		const retrievedProjects = await getProjects();
		setTasks(retrievedTasks);
		setProjects(retrievedProjects);
	};

	return (
		<div className="App">
			<h1>tasks app</h1>
			<button onClick={handleClick}>get all tasks</button>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
}

export default App;
