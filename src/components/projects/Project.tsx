import { ProjectType } from "../../types";

interface ProjectProps {
	project: ProjectType;
}

export const Project = ({ project }: ProjectProps) => {
	return (
		<div>
			<h2>{project.title}</h2>
			<p>{project.body}</p>
		</div>
	);
};
