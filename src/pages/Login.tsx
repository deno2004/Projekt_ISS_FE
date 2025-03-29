import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <div className="container mt-5">
            <h2>Prijava</h2>
            <form onSubmit={handleLogin}>
                <input type="email" className="form-control my-2" placeholder="E-pošta" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control my-2" placeholder="Geslo" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="btn btn-primary">Prijava</button>
            </form>
        </div>
    );
}

export default Login;
