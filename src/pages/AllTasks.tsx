import { useState } from "react";
import { TaskType } from "../types";

export const AllTasks = () => {
	const [tasks, setTasks] = useState<TaskType>([]);
	return <div></div>;
};
