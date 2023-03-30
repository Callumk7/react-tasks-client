import { useEffect, useState } from "react";
import { TaskForm } from "./components/tasks/TaskForm";
import { AllTasks } from "./pages/AllTasks";
import { TaskType } from "./types";
import {
	fetchTasksFromServer,
	updateTask,
	markTaskAsDeleted,
	createTask,
} from "./utils";
import "./App.css";

function App() {
	// App contains the state for all tasks and projects for the user
	// TODO: user login and authentication
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [isFetching, setIsFetching] = useState<boolean>(false);

	useEffect(() => {
        const fetchTasks = async () => {
            setIsFetching(true);
            const tasks = await fetchTasksFromServer();
            setTasks(tasks);
            setIsFetching(false);
        }
        fetchTasks();
	}, []);

	// function to update task list with a new task
	const addTask = (task: TaskType): void => {
		try {
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

	return (
		<div className="App">
			<TaskForm addTask={addTask} />
			<AllTasks
				tasks={tasks}
				isFetching={isFetching}
				deleteTask={deleteTask}
				markTaskAsCompleted={markTaskAsCompleted}
			/>
		</div>
	);
}

export default App;
