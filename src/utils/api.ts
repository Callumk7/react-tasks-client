import { ProjectType, TaskType } from "../types";
import { API_URL } from "../../config";

interface TasksResponse {
	tasks: TaskType[];
}

interface TaskResponse {
	task: TaskType;
}

// API requests for tasks
export const getTasks = async (): Promise<TaskType[]> => {
	const response = await fetch(`${API_URL}/tasks`);
	const data: TasksResponse = await response.json();
	return data.tasks;
};

export const getTask = async (id: number) => {
	const response = await fetch(`${API_URL}/tasks/${id}`);
	return await response.json();
};

export const createTask = async (task: TaskType) => {
	const response = await fetch(`${API_URL}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});
	return await response.json();
};

export const updateTask = async (task: TaskType) => {
	const response = await fetch(`${API_URL}/tasks/${task.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});
	return await response.json();
};

export const markTaskAsDeleted = async (id: number) => {
	const response = await fetch(`${API_URL}/tasks/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ deleted: true }),
	});
	return await response.json();
};

// API requests for projects
export const getProjects = async () => {
	const response = await fetch(`${API_URL}/projects`);
	return await response.json();
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
