import { Project, ProjectForm } from "../components";
import { ClientProjectType, ProjectType, TaskType } from "../types";

interface AllProjectsProps {
	tasks: TaskType[];
	projects: ProjectType[];
	isFetchingProjects: boolean;
	addProject: (project: ClientProjectType) => void;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const AllProjects = ({
	tasks,
	projects,
	isFetchingProjects,
	addProject,
	deleteTask,
	toggleTaskCompleted,
}: AllProjectsProps) => {
	return (
		<div>
			<ProjectForm addProject={addProject} />
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
