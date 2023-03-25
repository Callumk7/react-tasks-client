import { TaskType } from "../../types";
import styled from "styled-components";

interface TaskProps {
	task: TaskType;
	handleCheckboxToggle: () => void;
}

const StyledTask = styled.div`
	border: 1px solid #ccc;
	padding: 10px;
	margin-bottom: 10px;
	position: relative;
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

const StyledTaskProject = styled.p`
	font-size: 12px;
	margin-bottom: 5px;
`;

const StyledTaskDelete = styled.button`
	position: absolute;
	bottom: 10px;
	right: 10px;
`;

const StyledTaskCheckbox = styled.input`
	position: absolute;
	top: 10px;
	right: 10px;
`;

export const Task = ({ task }: TaskProps) => {
	return (
		<StyledTask>
			<StyledTaskTitle>{task.title}</StyledTaskTitle>
			<StyledTaskBody>{task.body}</StyledTaskBody>
			<StyledTaskCheckbox type="checkbox" />
			<StyledTaskDelete>Delete</StyledTaskDelete>
		</StyledTask>
	);
};
