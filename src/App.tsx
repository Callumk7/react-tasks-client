import { useEffect, useState } from "react";
import { Task } from "./components";
import { TaskForm } from "./components/tasks/TaskForm";
import { ProjectType, TaskType } from "./types";
import {
	getTasks,
	updateTask,
	markTaskAsDeleted,
	createTask,
} from "./utils/api";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	// fetch tasks from the server
	useEffect(() => {
		console.log("fetching tasks...");
		async function fetchTasks() {
			const tasks = await getTasks();
			setTasks(tasks);
		}
		fetchTasks();
		console.log("tasks fetched");
	}, []);

	// function to update task list with a new task
	const addTask = (task: TaskType) => {
		try {
			setTasks([...tasks, task]);
			console.log("task added to local state");
			createTask(task);
		} catch (error) {
			console.log(error);
		}
		console.log("task sent to the server");
	};

	// function to mark a task as deleted in the server
	const deleteTask = (id: number) => {
		try {
			setTasks(tasks.filter((task) => task.id !== id));
			markTaskAsDeleted(id);
			console.log(`task with id ${id} deleted`);
		} catch (error) {
			console.log(error);
		}
	};

	// function to mark a task as completed in the server
	const markTaskAsCompleted = (id: number) => {
		try {
			// logic to mark task as completed goes here...
			const task = tasks.find((task) => task.id === id);
			if (task) {
				task.completed = true;
				updateTask(task);
				setTasks([...tasks]);
				console.log(`task with id ${id} marked as completed`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	let tempKey = 0;

	return (
		<div className="App">
			<h1>tasks app</h1>
			<TaskForm addTask={addTask} />
			{tasks &&
				tasks.map((task) => {
					tempKey++;
					return (
						<Task
							key={tempKey}
							task={task}
							deleteTask={deleteTask}
							markTaskAsCompleted={markTaskAsCompleted}
						/>
					);
				})}
		</div>
	);
}

export default App;
