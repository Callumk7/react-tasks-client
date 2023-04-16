export interface TaskType {
	id: number;
	title: string;
	body?: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	projectId?: number;
	createdAt: string;
	dueDate?: string;
	listPosition?: number;
}

export interface ClientTaskType {
	id?: number;
	title: string;
	body?: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	projectId?: number;
	createdAt?: string;
	listPositition?: number;
}
