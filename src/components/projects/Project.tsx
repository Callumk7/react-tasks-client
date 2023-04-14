import { ProjectType, TaskType } from "../../types";
import { Task } from "../tasks/Task";

interface ProjectProps {
	project: ProjectType;
	projectTasks: TaskType[];
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const Project = ({
	project,
	projectTasks,
	deleteTask,
	toggleTaskCompleted,
}: ProjectProps) => {
	// I need to get the tasks for this project

	return (
		<div>
			<h2>{project.title}</h2>
			<p>{project.body}</p>
			{projectTasks &&
				projectTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTaskCompleted={toggleTaskCompleted}
					/>
				))}
		</div>
	);
};
