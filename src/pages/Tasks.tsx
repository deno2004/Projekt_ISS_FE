import { useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import api from "../api";

interface Task {
    id: number;
    title: string;
    description: string;
    status: { name: string };
    deadline: { due_date: string };
}

function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    useEffect(() => {
        api.get("/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.error("Error fetching tasks", error));
    }, []);

    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/tasks", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(response.data);
        } catch (error) {
            console.error("Error loading tasks");
        }
    };

    const addTask = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5000/api/tasks", { title: newTask }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNewTask("");
            fetchTasks();
        } catch (error) {
            console.error("Error adding task");
        }
    };

    const deleteTask = async (id: number) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchTasks();
        } catch (error) {
            console.error("Error deleting task");
        }
    };

    const markAsFinished = async (id: number) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: "Completed" }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchTasks();
        } catch (error) {
            console.error("Error updating task");
        }
    };

    return (
        <section className="d-flex justify-content-center align-items-center vh-100">
            <div className="containe">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="card-body p-4">
                                <div className="text-center mb-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                         className="img-fluid" alt="Login illustration" style={{ maxWidth: "80%" }} />
                                </div>
                                <h2 className="text-center my-3 pb-3">To Do App</h2>
                                <form onSubmit={addTask} className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <div className="col-12">
                                        <Link to={`/create`} className="btn btn-primary ms-1">Add</Link>
                                    </div>
                                </form>
                                <table className="table mb-4">
                                    <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Todo item</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tasks.map((task, index) => (
                                        <tr key={task.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <Link to={`/tasks/${task.id}/details`} className="text-decoration-none">
                                                    {task.title}
                                                </Link>
                                            </td>
                                            <td>{task.status.name}</td>
                                            <td>
                                                <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                                <button onClick={() => markAsFinished(task.id)} className="btn btn-success ms-1">Finished</button>
                                                <Link to={`/tasks/${task.id}/update`} className="btn btn-warning ms-1">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tasks;