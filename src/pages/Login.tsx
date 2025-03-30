import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            navigate("/tasks");
        } catch (error) {
            alert("Neveljavni podatki!");
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
                            <h3 className="text-center mb-4">Prijava</h3>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
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
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Vnesite geslo"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary btn-lg w-100">Prijava</button>
                                </div>
                                <p className="text-center mt-3">
                                    Don't have an account? <Link to="/register" className="link-primary">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
