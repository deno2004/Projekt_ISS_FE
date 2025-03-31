import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import {Create} from "./pages/Create";
import {Details} from "./pages/Details";
import {Update} from "./pages/Update";


function App() {
    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/update" element={<Update />} />
                </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
