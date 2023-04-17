import { Task, TaskForm } from "../components";
import { ClientTaskType, ProjectType, TaskType } from "../types";

interface AllTasksProps {
	tasks: TaskType[];
	projects: ProjectType[];
	isFetchingTasks: boolean;
	addTask: (task: ClientTaskType) => void;
	archiveTask: (id: number) => void;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const AllTasks = ({
	tasks,
	projects,
	isFetchingTasks,
	addTask,
	archiveTask,
	deleteTask,
	toggleTaskCompleted,
}: AllTasksProps) => {
	// Sort the tasks by created time
	const sortedTasks = tasks.sort((a, b) => {
		return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
	});

	return (
		<div>
			<TaskForm addTask={addTask} projects={projects} />
			{isFetchingTasks && <p>Loading...</p>}

			{sortedTasks &&
				sortedTasks.map((task: TaskType) => {
					return (
						<Task
							key={task.id}
							task={task}
							archiveTask={archiveTask}
							deleteTask={deleteTask}
							toggleTaskCompleted={toggleTaskCompleted}
						/>
					);
				})}
		</div>
	);
};
