import { useEffect, useState } from "react";

export const TasksContainer = (props: {}) => {
	const [tasks, setTasks] = useState([]);
	return (
		<div>
			<h1>Tasks App</h1>
			<div className="tasksList">
				<h2>Tasks</h2>
				<ul>
					Here we will map through our tasks and make a task component
				</ul>
			</div>
		</div>
	);
};
