import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Developer");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { email, password, role });
            navigate("/login");
        } catch (error) {
            alert("Napaka pri registraciji!");
        }
    };

    return (
        <section className="d-flex justify-content-center align-items-center mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow p-4">
                            <div className="text-center mb-3">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid"
                                    alt="Register illustration"
                                    style={{ maxWidth: "80%" }}
                                />
                            </div>
                            <h3 className="text-center mb-4">Registracija</h3>
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label className="form-label">E-pošta</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Vnesite e-pošto"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Geslo</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Vnesite geslo"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Vloga</label>
                                    <select
                                        className="form-control"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    >
                                        <option value="Developer">Developer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary btn-lg w-100">
                                        Registracija
                                    </button>
                                </div>
                                <p className="text-center mt-3">
                                    Already have an account? <Link to="/login" className="link-danger">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
