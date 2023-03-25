/**
 * TaskType
 * id: number;
 * title: string;
 * body: string;
 * completed: boolean;
 * archived: boolean;
 * deleted: boolean;
 * project_id: number | null;
 * project: string | null;
 */
export interface TaskType {
	id: number;
	title: string;
	body: string;
	completed: boolean;
	archived: boolean;
	deleted: boolean;
	project_id: number | null;
	project: string | null;
}
