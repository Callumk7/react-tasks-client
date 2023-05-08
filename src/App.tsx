// react imports
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components and pages
import { TaskForm } from "./components";
import { AllProjects, AllTasks, Home, NotFound } from "./pages";

// types and utils
import { ClientProjectType, ClientTaskType, ProjectType, TaskType } from "./types";
import {
    fetchProjectsFromServer,
    fetchTasksFromServer,
    markTaskAsArchivedOnServer,
    markTaskAsDeletedOnServer,
    postProjectToServer,
    postTaskToServer,
    toggleTaskCompletedOnServer,
} from "./utils";
import { NavBar } from "./components/navigation/NavBar";

let didFetch = false;

function TailwindTest() {
    return (
        <div>
            <h1 className="text-3xl font-bold p-20 underline">Hello world!</h1>
            <p className="text-red-300">
                This is some more tailwind styling
            </p>
        </div>
    );
}

function App() {
    // App contains the state for all tasks and projects for the user
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isFetchingTasks, setIsFetchingTasks] = useState<boolean>(false);
    const [isFetchingProjects, setIsFetchingProjects] = useState<boolean>(false);

    useEffect(() => {
        if (!didFetch) {
            // only fetch data once -- makes app more reslient to errors
            didFetch = true;
            fetchDataFromServer();
        }
    }, []);

    // fetch tasks and projects from the server
    async function fetchDataFromServer(): Promise<void> {
        setIsFetchingTasks(true);
        setIsFetchingProjects(true);

        const tasksData = await fetchTasksFromServer();
        setTasks(tasksData);

        const projectsData = await fetchProjectsFromServer();
        setProjects(projectsData);

        setIsFetchingTasks(false);
        setIsFetchingProjects(false);
    }

    // function to update task list with a new task
    async function addTask(task: ClientTaskType) {
        try {
            const response = await postTaskToServer(task);
            if (response.ok) {
                const newTask = await response.json();
                setTasks([...tasks, newTask]);
                console.log(`task ${newTask.id}, "${newTask.title}" added`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // function to add a project to the project list
    async function addProject(project: ClientProjectType) {
        try {
            const response = await postProjectToServer(project);
            if (response.ok) {
                const newProject = await response.json();
                setProjects([...projects, newProject]);
                console.log(`project ${newProject.id}, "${newProject.title}" added`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // function to mark a task as deleted in the server
    async function deleteTask(id: number) {
        try {
            const task = tasks.find((task) => task.id === id);
            if (task) {
                const response = await markTaskAsDeletedOnServer(id);
                if (response.ok) {
                    setTasks(tasks.filter((task) => task.id !== id));
                    console.log(`task ${id} deleted`);
                }
            } else {
                console.log(`task ${id} not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function archiveTask(id: number) {
        try {
            const task = tasks.find((task) => task.id === id);
            if (task) {
                const response = await markTaskAsArchivedOnServer(id);
                if (response.ok) {
                    setTasks(tasks.filter((task) => task.id !== id));
                    console.log(`task ${id} archived`);
                }
            } else {
                console.log(`task ${id} not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // function to mark a task as completed in the server
    async function toggleCompleted(task: TaskType) {
        try {
            const taskToUpdate = tasks.find((t) => t.id === task.id);
            if (taskToUpdate) {
                console.log(`task ${task.id} found..`);
                const response = await toggleTaskCompletedOnServer(task);
                if (response.ok) {
                    taskToUpdate.completed = !taskToUpdate.completed;
                    setTasks([...tasks]);
                    console.log(`task ${task.id} marked as completed`);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="App">
            <h1>Task Tracker</h1>
            <TailwindTest />
            <NavBar />
            <Router />
        </div>
    );

    function Router() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/tasks"
                    element={
                        <AllTasks
                            tasks={tasks}
                            projects={projects}
                            isFetchingTasks={isFetchingTasks}
                            addTask={addTask}
                            archiveTask={archiveTask}
                            deleteTask={deleteTask}
                            toggleTaskCompleted={toggleCompleted}
                        />
                    }
                />
                <Route
                    path="/tasks/new"
                    element={<TaskForm addTask={addTask} projects={projects} />}
                />
                <Route
                    path="/projects"
                    element={
                        <AllProjects
                            tasks={tasks}
                            projects={projects}
                            addProject={addProject}
                            isFetchingProjects={isFetchingProjects}
                            archiveTask={archiveTask}
                            deleteTask={deleteTask}
                            toggleTaskCompleted={toggleCompleted}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }
}

export default App;
