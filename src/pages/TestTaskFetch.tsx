// Write a component that fetches a task by id.
// The component should render the task title and description.
// The component should render a loading indicator while the task is being fetched.

import { useState } from "react";
import { TaskType } from "../types";

interface TaskFetchProps {
	id: number;
	getTaskById: (id: number) => Promise<TaskType>;
}

export const TestTaskFetch = ({ id, getTaskById }: TaskFetchProps) => {
	const [task, setTask] = useState<TaskType | null>(null);
	return (
		<div>
			<h1>TestTaskFetch</h1>
			<input type="text" value={id} />
			<button onClick={}>Fetch task</button>
		</div>
	);
};
