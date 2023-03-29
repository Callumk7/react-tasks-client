import { TaskType } from "../../types";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

interface TaskProps {
	task: TaskType;
	deleteTask: (id: number) => void;
	markTaskAsCompleted: (id: number) => void;
}

const StyledTask = styled.div`
	padding: 10px;
	margin-bottom: 10px;
	position: relative;
	border-radius: 8px;
	background-color: #564568;
	transition: transform 0.3s ease-out;
	&.deleted {
		transform: translateX(100%);
	}
`;

const StyledTaskTitle = styled.h2`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 5px;
`;

const StyledTaskBody = styled.p`
	font-size: 14px;
	margin-bottom: 10px;
`;

const StyledTaskCheckbox = styled.input`
	position: absolute;
	top: 10px;
	right: 10px;
`;

export const Task = ({ task, deleteTask, markTaskAsCompleted }: TaskProps) => {
	const handleDelete = () => {
		if (typeof task.id === "number") {
			deleteTask(task.id);
		}
	};

	const handleTaskCompleted = () => {
		if (typeof task.id === "number") {
			markTaskAsCompleted(task.id);
		}
	};

	return (
		<StyledTask>
			<StyledTaskTitle>{task.title}</StyledTaskTitle>
			<StyledTaskBody>{task.body}</StyledTaskBody>
			<StyledTaskCheckbox
				type="checkbox"
				onChange={handleTaskCompleted}
				checked={task.completed}
			/>
			<StyledButton warning onClick={handleDelete}>
				Delete
			</StyledButton>
		</StyledTask>
	);
};
