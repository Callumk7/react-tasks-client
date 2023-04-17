import { ProjectType, TaskType } from "../../types";
import { StyledProjectContainer } from "../styles/Project";
import { Task } from "../tasks/Task";

interface ProjectProps {
	project: ProjectType;
	projectTasks: TaskType[];
	deleteTask: (id: number) => void;
	archiveTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const Project = ({
	project,
	projectTasks,
	archiveTask,
	deleteTask,
	toggleTaskCompleted,
}: ProjectProps) => {
	return (
		<StyledProjectContainer>
			<h2>{project.title}</h2>
			<p>{project.body}</p>
			{projectTasks &&
				projectTasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						archiveTask={archiveTask}
						deleteTask={deleteTask}
						toggleTaskCompleted={toggleTaskCompleted}
					/>
				))}
		</StyledProjectContainer>
	);
};
