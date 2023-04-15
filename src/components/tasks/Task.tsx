import { TaskType } from "../../types";
import {
	StyledTask,
	StyledTaskBody,
	StyledTaskCheckbox,
	StyledTaskTitle,
} from "../styles";

interface TaskProps {
	task: TaskType;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const Task = ({ task, deleteTask, toggleTaskCompleted }: TaskProps) => {
	const handleDelete = () => {
		if (typeof task.id === "number") {
			deleteTask(task.id);
		}
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
		</StyledTask>
	);
};
