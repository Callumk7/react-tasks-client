import { TaskType, ClientTaskType } from "../types";
import { API_URL } from "../../config";

export async function fetchTasksFromServer(): Promise<TaskType[]> {
	try {
		const response = await fetch(`${API_URL}/tasks`);
		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getTaskById(id: number): Promise<string | TaskType> {
	try {
		const response = await fetch(`${API_URL}/tasks/${id}`);
		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			return error.message;
		} else {
			return "unknown error"; // TODO: check that this is fine error handling.
		}
	}
}
// Required Functions:
// 1. get all tasks from the server
// 2. get a single task from the server
// 3. create a new task on the server
// 4a. update a tasks title on the server
// 4b. update a tasks completed status on the server
// 5. delete a task on the server

export async function createTask(task: ClientTaskType): Promise<TaskType> {
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
}

export async function markTaskAsDeleted(id: number): Promise<TaskType> {}
