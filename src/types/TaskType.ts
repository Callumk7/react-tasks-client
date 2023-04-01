export interface TaskType {
	id: number;
	title: string;
	body?: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	projectId?: number;
	createdAt: string;
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
}
