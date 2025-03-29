import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Developer");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { email, password, role });
            navigate("/");
        } catch (error) {
            alert("Napaka pri registraciji!");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registracija</h2>
            <form onSubmit={handleRegister}>
                <input type="email" className="form-control my-2" placeholder="E-pošta" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="form-control my-2" placeholder="Geslo" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select className="form-control my-2" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                </select>
                <button className="btn btn-success">Registracija</button>
            </form>
        </div>
    );
}

export default Register;
