import { TaskType } from "../types";

export interface ProjectType {
	id: number;
	title: string;
	body?: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	tasks?: TaskType[];
	createdAt: string;
	dueDate?: string;
}

export interface ClientProjectType {
	id?: number;
	title: string;
	body?: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	tasks?: TaskType[];
	createdAt?: string;
	dueDate?: string;
}
