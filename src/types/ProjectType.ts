import { TaskType } from "../types";

export interface ProjectType {
	id?: number;
	title: string;
	body?: string | null;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	tasks?: TaskType[];
}
