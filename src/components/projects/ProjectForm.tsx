import { useState } from "react";
import { StyledButton, StyledForm, StyledFormContainer, StyledInput } from "../styles";

export const ProjectForm = () => {
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
		console.log(projectTitle, projectBody);
	};

	return (
		<div>
			<h1>Project Form</h1>
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

					<StyledButton>New Project</StyledButton>
				</StyledForm>
			</StyledFormContainer>
		</div>
	);
};
