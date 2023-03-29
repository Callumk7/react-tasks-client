import { TaskType } from "../types";
import { API_URL } from "../../config";

// API requests for tasks
export async function fetchTasksFromServer(): Promise<TaskType[]> {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getTask(id: number) {
    const response = await fetch(`${API_URL}/tasks/${id}`);
    return await response.json();
}

export const createTask = async (task: TaskType) => {
	const response = await fetch(`${API_URL}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(task),
	});
	if (!response.ok) {
		throw new Error(`failed to create task!`);
	}
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
	if (!response.ok) {
		throw new Error(`failed to update task ${task.id}!`);
	}
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
	if (!response.ok) {
		throw new Error(`failed to delete task ${id}!`);
	}
	return await response.json();
};


