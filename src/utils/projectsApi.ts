import { ClientProjectType, ProjectType } from "../types";
import { API_URL } from "../../config";

// API requests for projects
export const fetchProjectsFromServer = async () => {
	const response = await fetch(`${API_URL}/projects`);
	return await response.json();
};

export const postProjectToServer = async (project: ClientProjectType) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(project),
	};
	const response = await fetch(`${API_URL}/projects`, options);
	if (!response.ok) {
		throw new Error("failed to post project");
	}

	return response;
};

export const getProject = async (id: number) => {
	const response = await fetch(`${API_URL}/projects/${id}`);
	return await response.json();
};

export const createProject = async (project: ProjectType) => {
	const response = await fetch(`${API_URL}/projects`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(project),
	});
	return await response.json();
};

export const updateProject = async (project: ProjectType) => {
	const response = await fetch(`${API_URL}/projects/${project.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(project),
	});
	return await response.json();
};
