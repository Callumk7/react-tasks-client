import moment from "moment";
import { TaskType } from "../../types";

// define interface for props
interface TaskProps {
	task: TaskType;
	deleteTask: (id: number) => void;
	archiveTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

//
// COMPONENT
//
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
		<div className="card m-3 p-4 outline outline-dotted outline-primary">
			<input
				type="checkbox"
				onChange={handleCompletedToggled}
				className="checkbox absolute right-4 top-4"
				checked={task.completed}
			></input>
			<h2 className="mb-2 ml-1  text-xl font-bold">{task.title}</h2>
			<div className="ml-1">{task.body}</div>
			<div className="ml-1">
				<span className="font-bold">DUE:</span>
				{moment(task.dueDate).format("MMM Do YYYY")}
			</div>
			<div className="flex flex-row ">
				<button
					className="btn-outline btn-error btn-sm btn m-1"
					onClick={handleDelete}
				>
					Delete
				</button>
				<button className="btn-outline btn-sm btn m-1" onClick={handleArchive}>
					Archive
				</button>
				<button className="btn-outline btn-sm btn m-1" onClick={handleEdit}>
					Edit
				</button>
			</div>
		</div>
	);
};
