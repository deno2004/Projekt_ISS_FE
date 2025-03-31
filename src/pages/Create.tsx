import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post("/tasks", { title, description });
            navigate("/tasks");
        } catch (error) {
            console.error("Error creating task");
        }
    };

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
                            <h2 className="text-center my-3 pb-3">Create Task</h2>
                            <form onSubmit={handleSubmit}>
                                <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                <button type="submit" className="btn btn-primary w-100">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
