import { Project } from "../components";
import { ProjectType } from "../types";

interface AllProjectsProps {
	projects: ProjectType[];
	isFetchingProjects: boolean;
}

export const AllProjects = ({ projects, isFetchingProjects }: AllProjectsProps) => {
	return (
		<div>
			<h1>All Projects</h1>
			{isFetchingProjects && <p>Loading...</p>}

			{projects &&
				projects.map((project: ProjectType) => {
					return <Project key={project.id} project={project} />;
				})}
		</div>
	);
};
