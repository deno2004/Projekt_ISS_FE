import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // Convert to boolean
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary px-3">
            <div className="container-fluid">
                <Link className="navbar-brand text-light ms-3" to="/">
                    Task Tracker
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        {!isLoggedIn ? (
                            <>
                                <Link className="nav-link text-light" to="/login">Login</Link>
                                <Link className="nav-link text-light" to="/register">Register</Link>
                            </>
                        ) : (
                            <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
