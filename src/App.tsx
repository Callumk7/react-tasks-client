import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/tasks/TaskForm";
import { AllTasks } from "./pages/AllTasks";
import { ProjectType, TaskType } from "./types";
import { fetchTasksFromServer, updateTask, markTaskAsDeleted, createTask } from "./utils";
import "./App.css";
import { fetchProjectsFromServer } from "./utils/projectsApi";
import NotFound from "./pages/NotFound";
import { AllProjects } from "./pages/AllProjects";
import Home from "./pages/Home";

function App() {
	// App contains the state for all tasks and projects for the user
	// TODO: user login and authentication
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [isFetchingTasks, setIsFetchingTasks] = useState<boolean>(false);
	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [isFetchingProjects, setIsFetchingProjects] = useState<boolean>(false);

	// fetch tasks and projects from the server
	useEffect(() => {
		const fetchDataFromServer = async () => {
			setIsFetchingTasks(true);
			setIsFetchingProjects(true);

			const tasksData = await fetchTasksFromServer();
			setTasks(tasksData);

			const projectsData = await fetchProjectsFromServer();
			setProjects(projectsData);

			setIsFetchingTasks(false);
			setIsFetchingProjects(false);
		};
		fetchDataFromServer();
	}, []);

	// function to update task list with a new task
	const addTask = (task: TaskType) => {
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
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/tasks"
					element={
						<AllTasks
							tasks={tasks}
							isFetchingTasks={isFetchingTasks}
							deleteTask={deleteTask}
							markTaskAsCompleted={markTaskAsCompleted}
						/>
					}
				/>
				<Route path="/tasks/new" element={<TaskForm addTask={addTask} />} />
				<Route
					path="/projects"
					element={
						<AllProjects
							projects={projects}
							isFetchingProjects={isFetchingProjects}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
