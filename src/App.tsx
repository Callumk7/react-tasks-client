// react imports
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

// components and pages
import { TaskForm } from "./components";
import { Home, AllTasks, AllProjects, NotFound } from "./pages";

// types and utils
import { ClientTaskType, ProjectType, TaskType } from "./types";
import {
	fetchTasksFromServer,
	postTaskToServer,
	fetchProjectsFromServer,
	markTaskAsDeletedOnServer,
	// markTaskAsCompletedOnServer,
	toggleTaskCompletedOnServer,
} from "./utils";

// styles
import "./App.css";

let didFetch = false;

function App() {
	// App contains the state for all tasks and projects for the user
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [projects, setProjects] = useState<ProjectType[]>([]);
	const [isFetchingTasks, setIsFetchingTasks] = useState<boolean>(false);
	const [isFetchingProjects, setIsFetchingProjects] = useState<boolean>(false);

	useEffect(() => {
		if (!didFetch) {
			// only fetch data once -- makes app more reslient to errors
			didFetch = true;
			fetchDataFromServer();
		}
	}, []);

	// fetch tasks and projects from the server
	async function fetchDataFromServer(): Promise<void> {
		setIsFetchingTasks(true);
		setIsFetchingProjects(true);

		const tasksData = await fetchTasksFromServer();
		setTasks(tasksData);

		const projectsData = await fetchProjectsFromServer();
		setProjects(projectsData);

		setIsFetchingTasks(false);
		setIsFetchingProjects(false);
	}

	// function to update task list with a new task
	async function addTask(task: ClientTaskType) {
		try {
			const response = await postTaskToServer(task);
			if (response.ok) {
				const newTask = await response.json();
				setTasks([...tasks, newTask]);
				console.log(`task ${newTask.id}, "${newTask.title}" added`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// function to mark a task as deleted in the server
	async function deleteTask(id: number) {
		try {
			const task = tasks.find((task) => task.id === id);
			if (task) {
				const response = await markTaskAsDeletedOnServer(id);
				if (response.ok) {
					setTasks(tasks.filter((task) => task.id !== id));
					console.log(`task ${id} deleted`);
				}
			} else {
				console.log(`task ${id} not found`);
			}
		} catch (error) {
			console.log(error);
		}
	}

	// function to mark a task as completed in the server
	async function toggleCompleted(task: TaskType) {
		try {
			const taskToUpdate = tasks.find((t) => t.id === task.id);
			if (taskToUpdate) {
				console.log(`task ${task.id} found..`);
				const response = await toggleTaskCompletedOnServer(task);
				if (response.ok) {
					taskToUpdate.completed = !taskToUpdate.completed;
					setTasks([...tasks]);
					console.log(`task ${task.id} marked as completed`);
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/tasks">Tasks</Link>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/tasks"
					element={
						<AllTasks
							tasks={tasks}
							projects={projects}
							isFetchingTasks={isFetchingTasks}
							addTask={addTask}
							deleteTask={deleteTask}
							toggleTaskCompleted={toggleCompleted}
						/>
					}
				/>
				<Route
					path="/tasks/new"
					element={<TaskForm addTask={addTask} projects={projects} />}
				/>
				<Route
					path="/projects"
					element={
						<AllProjects
							tasks={tasks}
							projects={projects}
							isFetchingProjects={isFetchingProjects}
							deleteTask={deleteTask}
							toggleTaskCompleted={toggleCompleted}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
