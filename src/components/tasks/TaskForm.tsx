import { useState } from "react";
import { ClientTaskType } from "../../types";
import styled from "styled-components";

type TaskFormProps = {
	addTask: (task: ClientTaskType) => void;
};

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledInput = styled.input`
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid black;
`;

const StyledButton = styled.button`
	margin: 10px;
	padding: 5px, 10px;
	border-radius: 5px;
	border: none;
	background-color: blue;
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

export const TaskForm = ({ addTask }: TaskFormProps) => {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskBody, setTaskBody] = useState("");

	// handle changes to the title field
	const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setTaskTitle(value);
	};

	// handle changes to the body field
	const handleTaskBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setTaskBody(value);
	};

	// handle form submission
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTask: ClientTaskType = {
			title: taskTitle,
			body: taskBody,
			completed: false,
			archived: false,
			deleted: false,
			createdAt: new Date().toISOString(),
		};
		addTask(newTask);
		setTaskTitle("");
		setTaskBody("");
	};

	return (
		<StyledFormContainer>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInput
					type="text"
					value={taskTitle}
					onChange={handleTaskTitleChange}
				></StyledInput>
				<StyledInput
					type="text"
					value={taskBody}
					onChange={handleTaskBodyChange}
				></StyledInput>
				<StyledButton>Add a new task</StyledButton>
			</StyledForm>
		</StyledFormContainer>
	);
};
