import { TaskType } from "../../types";

interface TaskProps {
	task: TaskType;
}

export const Task = ({ task }: TaskProps) => {
	return (
		<div className="task">
			<h2 className="taskTitle">{task.title}</h2>
			<p className="taskBody">{task.body}</p>
			<p className="taskProject">{task.project}</p>
			<button className="taskDelete">Delete</button>
		</div>
	);
};
