import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
    id: number;
    title: string;
    description: string;
    status: { name: string };
    deadline: { due_date: string };
}

function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/tasks", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTasks(response.data);
            } catch (error) {
                console.error("Napaka pri nalaganju nalog");
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Naloge</h2>
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                        <span className={`badge ${task.status.name === "Completed" ? "bg-success" : "bg-warning"}`}>
                            {task.status.name}
                        </span>
                        <span className="text-muted"> Rok: {task.deadline?.due_date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
