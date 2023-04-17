import { TaskType } from "../../types";
import {
	StyledTask,
	StyledTaskBody,
	StyledTaskCheckbox,
	StyledTaskTitle,
} from "../styles";
import { PrimaryButton, WarningButton } from "../styles/Button";

interface TaskProps {
	task: TaskType;
	deleteTask: (id: number) => void;
	archiveTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const Task = ({
	task,
	deleteTask,
	archiveTask,
	toggleTaskCompleted,
}: TaskProps) => {
	const handleDelete = () => {
		if (typeof task.id === "number") {
			deleteTask(task.id);
		}
	};

	const handleArchive = () => {
		if (typeof task.id === "number") {
			archiveTask(task.id);
		}
	};

	const handleEdit = () => {
		console.log("Edit task");
	};

	const handleCompletedToggled = () => {
		toggleTaskCompleted(task);
	};

	return (
		<StyledTask>
			<StyledTaskTitle>{task.title}</StyledTaskTitle>
			<StyledTaskBody>{task.body}</StyledTaskBody>
			<StyledTaskCheckbox
				type="checkbox"
				onChange={handleCompletedToggled}
				checked={task.completed}
			/>
			<WarningButton onClick={handleDelete}>Delete</WarningButton>
			<PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
			<PrimaryButton onClick={handleArchive}>Archive</PrimaryButton>
		</StyledTask>
	);
};
