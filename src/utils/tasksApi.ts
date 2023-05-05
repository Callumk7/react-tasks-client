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

export async function postTaskToServer(task: ClientTaskType): Promise<Response> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  };

  const response = await fetch(`${API_URL}/tasks`, options);
  if (!response.ok) {
    throw new Error(`failed to post task!`);
  }

  return response;
}

export async function markTaskAsDeletedOnServer(id: number): Promise<Response> {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ deleted: true }),
  };

  const response = await fetch(`${API_URL}/tasks/${id}`, options);
  if (!response.ok) {
    throw new Error(`failed to mark task as deleted!`);
  }

  return response;
}

export async function markTaskAsArchivedOnServer(id: number): Promise<Response> {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ archived: true }),
  };

  const response = await fetch(`${API_URL}/tasks/${id}`, options);
  if (!response.ok) {
    throw new Error(`failed to mark task as archived!`);
  }

  return response;
}

// Probably change this to a toggle completed function
export async function toggleTaskCompletedOnServer(task: TaskType): Promise<Response> {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: !task.completed }),
  };

  const response = await fetch(`${API_URL}/tasks/${task.id}`, options);
  if (!response.ok) {
    throw new Error(`failed to toggle task completed!`);
  }

  return response;
}

// export async function markTaskAsCompletedOnServer(id: number): Promise<Response> {
// 	const options = {
// 		method: "PATCH",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ completed: true }),
// 	};
// 	const response = await fetch(`${API_URL}/tasks/${id}`, options);
// 	if (!response.ok) {
// 		throw new Error(`failed to mark task as completed!`);
// 	}
// 	return response;
// }
