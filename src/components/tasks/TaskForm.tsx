import { useState } from "react";
import { ClientTaskType, ProjectType } from "../../types";
import { StyledForm, StyledFormContainer, StyledInput } from "../styles";
import { PrimaryButton } from "../styles/Button";

type TaskFormProps = {
	addTask: (task: ClientTaskType) => void;
	projects: ProjectType[];
};

export const TaskForm = ({ addTask, projects }: TaskFormProps) => {
	const [taskTitle, setTaskTitle] = useState("");
	const [taskBody, setTaskBody] = useState("");
	const [taskProjectId, setTaskProjectId] = useState<number | undefined>(1);

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
			projectId: taskProjectId,
		};
		addTask(newTask);
		setTaskTitle("");
		setTaskBody("");
	};

	// handle changes to the project dropdown
	const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTaskProjectId(Number(value));
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

				<select onChange={handleProjectChange}>
					{projects.map((project) => (
						<option key={project.id} value={project.id}>
							{project.title}
						</option>
					))}
				</select>
				<PrimaryButton type="submit">Add Task</PrimaryButton>
			</StyledForm>
		</StyledFormContainer>
	);
};
