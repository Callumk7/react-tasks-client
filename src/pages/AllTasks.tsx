import { Task } from "../components";
import { TaskType } from "../types";

interface AllTasksProps {
	tasks: TaskType[];
	isFetchingTasks: boolean;
	deleteTask: (id: number) => void;
	markTaskAsCompleted: (id: number) => void;
}

export const AllTasks = ({
	tasks,
	isFetchingTasks,
	deleteTask,
	markTaskAsCompleted,
}: AllTasksProps) => {
	return (
		<div>
			{isFetchingTasks && <p>Loading...</p>}

			{tasks &&
				tasks.map((task: TaskType) => {
					return (
						<Task
							key={task.id}
							task={task}
							deleteTask={deleteTask}
							markTaskAsCompleted={markTaskAsCompleted}
						/>
					);
				})}
		</div>
	);
};
