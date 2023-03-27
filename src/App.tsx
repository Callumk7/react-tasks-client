import { useEffect, useState } from "react";
import { Task } from "./components";
import { TaskForm } from "./components/tasks/TaskForm";
import { ProjectType, TaskType } from "./types";
import { getTasks, getProjects, updateTask, markTaskAsDeleted } from "./utils/api";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [projects, setProjects] = useState<ProjectType[]>([]);

	useEffect(() => {
		console.log("fetching tasks...");
		async function fetchTasks() {
			const tasks = await getTasks();
			setTasks(tasks);
		}
		fetchTasks();
	}, []);

	// function to update task list with a new task
	const addTask = (task: TaskType) => {
		setTasks([...tasks, task]);
	};

	const deleteTask = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
		markTaskAsDeleted(id);
	};

	let tempKey = 0;

	return (
		<div className="App">
			<h1>tasks app</h1>
			<TaskForm addTask={addTask} />
			{tasks &&
				tasks.map((task) => {
					tempKey++;
					return <Task key={tempKey} task={task} deleteTask={deleteTask} />;
				})}
		</div>
	);
}

export default App;
