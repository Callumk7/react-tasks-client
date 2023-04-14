import { Project } from "../components";
import { ProjectType, TaskType } from "../types";

interface AllProjectsProps {
	tasks: TaskType[];
	projects: ProjectType[];
	isFetchingProjects: boolean;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

// I want to display the tasks that are associated with each project
// I fetch all tasks and projects, but I need to associate the tasks with the projects

export const AllProjects = ({
	tasks,
	projects,
	isFetchingProjects,
	deleteTask,
	toggleTaskCompleted,
}: AllProjectsProps) => {
	return (
		<div>
			<h1>All Projects</h1>
			{isFetchingProjects && <p>Loading...</p>}

			{projects &&
				projects.map((project: ProjectType) => {
					return (
						<Project
							projectTasks={tasks.filter(
								(task) => task.projectId === project.id
							)}
							key={project.id}
							project={project}
							deleteTask={deleteTask}
							toggleTaskCompleted={toggleTaskCompleted}
						/>
					);
				})}
		</div>
	);
};
