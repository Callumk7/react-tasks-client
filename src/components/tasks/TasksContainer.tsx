import { useEffect, useState } from "react";
import { TaskType } from "../../types";
import { Task } from "./Task";

interface TaskContainerProps {
	tasks: TaskType[];
}

export const TasksContainer = ({ tasks }: TaskContainerProps) => {
	return (
		<div>
			<h1>Tasks App</h1>
			<div className="tasksList">
				<h2>Tasks</h2>
				{tasks.map((task) => {
					return <Task task={task} key={task.id} />;
				})}
			</div>
		</div>
	);
};
