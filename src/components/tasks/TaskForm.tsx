import { useState } from "react";
import { ClientTaskType, ProjectType } from "../../types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TaskFormProps = {
    addTask: (task: ClientTaskType) => void;
    projects: ProjectType[];
};

export const TaskForm = ({ addTask, projects }: TaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskBody, setTaskBody] = useState("");
    const [taskProjectId, setTaskProjectId] = useState<number | undefined>(1);
    const [dueDate, setDueDate] = useState<Date>(new Date());

    // handle changes to the title field
    const handleTaskTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setTaskTitle(value);
    };

    // handle changes to the body field
    const handleTaskBodyChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setTaskBody(value);
    };

    const handleDueDateChange = (date: Date) => {
        setDueDate(date);
    };

    // handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask: ClientTaskType = {
            title: taskTitle,
            body: taskBody,
            completed: false,
            archived: false,
            deleted: false,
            createdAt: new Date().toISOString(),
            dueDate: dueDate.toISOString(),
            projectId: taskProjectId,
        };
        addTask(newTask);
        setTaskTitle("");
        setTaskBody("");
    };

    // handle changes to the project dropdown
    const handleProjectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { value } = event.target;
        setTaskProjectId(Number(value));
    };

    return (
        <>
            <form
                className="flex w-max flex-col gap-3 bg-base-100 align-middle"
                onSubmit={handleSubmit}
            >
                <input
                    className="input-bordered input w-full max-w-xs"
                    placeholder="Task title"
                    onChange={handleTaskTitleChange}
                    value={taskTitle}
                />
                <input
                    className="input-bordered input w-full max-w-xs"
                    placeholder="Task title"
                    onChange={handleTaskBodyChange}
                    value={taskBody}
                />
                <select
                    className="select-bordered select w-full max-w-xs"
                    onChange={handleProjectChange}
                >
                    {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                            {project.title}
                        </option>
                    ))}
                </select>
                <button className="btn-primary btn">Add Task</button>
            </form>
        </>
    );
};
