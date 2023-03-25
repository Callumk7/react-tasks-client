import { useState } from "react";
import { TaskType } from "../../types";
import { createTask } from "../../utils/api";

type TaskFormProps = {
	addTask: (task: TaskType) => void;
};

export const TaskForm = ({ addTask }: TaskFormProps) => {
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
		addTask(newTask);
		console.log(newTask);
		setTaskTitle("");
		setTaskBody("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleTaskTitleChange}
					value={taskTitle}
				/>
				<input
					type="text"
					onChange={handleTaskBodyChange}
					value={taskBody}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};
