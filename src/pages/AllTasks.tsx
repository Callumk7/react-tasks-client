import { Task, TaskForm } from "../components";
import { ClientTaskType, ProjectType, TaskType } from "../types";

interface AllTasksProps {
	tasks: TaskType[];
	projects: ProjectType[];
	isFetchingTasks: boolean;
	addTask: (task: ClientTaskType) => void;
	deleteTask: (id: number) => void;
	toggleTaskCompleted: (task: TaskType) => void;
}

export const AllTasks = ({
	tasks,
	projects,
	isFetchingTasks,
	addTask,
	deleteTask,
	toggleTaskCompleted,
}: AllTasksProps) => {
	return (
		<div>
			<h1>All Tasks</h1>
			<h2>Add a task form</h2>
			<TaskForm addTask={addTask} projects={projects} />
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
