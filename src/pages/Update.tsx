import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function Update() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/tasks/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setDescription(response.data.description);
            })
            .catch(() => console.error("Error fetching task"));
    }, [id]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/tasks/${id}`, { title, description });
            navigate("/tasks");
        } catch (error) {
            console.error("Error updating task");
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
                            <h2>Update Task</h2>
                            <form onSubmit={handleUpdate}>
                                <input className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                <textarea className="form-control mb-2" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                <button type="submit" className="btn btn-success">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
