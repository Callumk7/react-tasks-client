import { useState } from "react";
import "./App.css";
import { TasksContainer } from "./components/tasks/TasksContainer";
import { getTasks, getProjects } from "./utils/api";

function App() {
	const handleClick = async () => {
		const tasks = await getTasks().then((res) => console.log(res));
		const projects = await getProjects().then((res) => console.log(res));
	};

	return (
		<div>
			<h1>tasks app</h1>
			<button onClick={handleClick}>get all tasks</button>
			<TasksContainer />
		</div>
	);
}

export default App;
