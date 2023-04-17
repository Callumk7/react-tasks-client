import { useState } from "react";
import { ClientProjectType } from "../../types";
import { StyledForm, StyledFormContainer, StyledInput } from "../styles";
import { PrimaryButton } from "../styles/Button";

interface ProjectFormProps {
	addProject: (project: ClientProjectType) => void;
}

export const ProjectForm = ({ addProject }: ProjectFormProps) => {
	const [projectTitle, setProjectTitle] = useState<string>("");
	const [projectBody, setProjectBody] = useState<string>("");

	const handleProjectTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setProjectTitle(value);
	};

	const handleProjectBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setProjectBody(value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newProject: ClientProjectType = {
			title: projectTitle,
			body: projectBody,
			archived: false,
			completed: false,
			deleted: false,
			createdAt: new Date().toISOString(),
		};
		addProject(newProject);
		setProjectTitle("");
		setProjectBody("");
	};

	return (
		<div>
			<StyledFormContainer>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput
						type="text"
						value={projectTitle}
						onChange={handleProjectTitleChange}
					></StyledInput>
					<StyledInput
						type="text"
						value={projectBody}
						onChange={handleProjectBodyChange}
					></StyledInput>

					<PrimaryButton type="submit">Add Project</PrimaryButton>
				</StyledForm>
			</StyledFormContainer>
		</div>
	);
};
