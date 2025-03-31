import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Task {
    id: number;
    title: string;
    description: string;
    status: { name: string };
    deadline?: { due_date: string };
}

export function Details() {
    const { id } = useParams<{ id: string }>();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/tasks/${id}`)
            .then(response => setTask(response.data))
            .catch(() => console.error("Error fetching task details"));
    }, [id]);

    if (!task) return <p>Loading...</p>;

    return (
        <section className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-5 mx-auto">
                        <div className="card shadow p-4">
                            <div className="text-center mb-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                     className="img-fluid" alt="Login illustration" style={{ maxWidth: "80%" }} />
                            </div>
                            <h2>Task Details</h2>
                            <p><strong>Title:</strong> {task.title}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Status:</strong> {task.status.name}</p>
                            <p><strong>Deadline:</strong> {task.deadline?.due_date || "No deadline"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
