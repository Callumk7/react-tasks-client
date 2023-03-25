import { useState } from "react";
import { TaskType } from "../../types";
import { createTask } from "../../utils/api";

export const TaskForm = () => {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskBody, setTaskBody] = useState("");

	const handleTaskTitleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		setTaskTitle(value);
	};

	const handleTaskBodyChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		setTaskBody(value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTask: TaskType = {
			title: taskTitle,
			body: taskBody,
			completed: false,
			archived: false,
			deleted: false,
		};
		createTask(newTask);
		console.log(newTask);
	};

	return (
		<div>
			<h1>Task Form</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleTaskTitleChange} />
				<input type="text" onChange={handleTaskBodyChange} />
				<button>Submit</button>
			</form>
		</div>
	);
};
