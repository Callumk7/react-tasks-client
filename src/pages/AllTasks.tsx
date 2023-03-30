import { Task } from "../components";
import { TaskType } from "../types";

interface AllTasksProps {
	tasks: TaskType[];
	isFetching: boolean;
	deleteTask: (id: number) => void;
	markTaskAsCompleted: (id: number) => void;
}

export const AllTasks = ({
	tasks,
	isFetching,
	deleteTask,
	markTaskAsCompleted,
}: AllTasksProps) => {
        return (
            <div>
                {isFetching && <p>Loading...</p>}

                {tasks &&
                    tasks.map((task: TaskType) => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                markTaskAsCompleted={markTaskAsCompleted} />
                        );
                    })}
            </div>
        );
    };
