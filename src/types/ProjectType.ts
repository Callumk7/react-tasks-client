import { TaskType } from "../types";

export type ProjectType = {
	id: number;
	title: string;
	body: string | null;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	tasks: TaskType[];
};
