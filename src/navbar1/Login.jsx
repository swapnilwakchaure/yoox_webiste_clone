import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Navbar2.css";

function Login() {
    // const [ email, setEmail ] = useState("");
    // const [ password, setPassword ] = useState("");
    // const [ loading, setLoading ] = useState(false);
    // const { loginUser, authState } = useContext(AppContext);
    // const navigate = useNavigate();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    // }

    const { isAuth, toggleAuth } = useContext(AppContext);

    return (
        <div class="formPage">
            <h1>Login Form</h1>
            <input type="text" placeholder="enter name" />
            <input type="text" placeholder="enter password" />
            <button onClick={toggleAuth}><Link to="/">LOG IN</Link></button>
        </div>
    )
}

export default Login;