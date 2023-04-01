import { Task } from "../components";
import { TaskType } from "../types";

interface AllTasksProps {
	tasks: TaskType[];
	isFetchingTasks: boolean;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const AllTasks = ({
	tasks,
	isFetchingTasks,
	deleteTask,
	toggleTaskCompleted,
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
							toggleTaskCompleted={toggleTaskCompleted}
						/>
					);
				})}
		</div>
	);
};
