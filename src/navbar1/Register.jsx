import { Link } from "react-router-dom";
import "../styles/Navbar2.css";

function Register() {
    return (
        <div class="formPage">
            <h1>Registration Form</h1>
            <input type="text" placeholder="enter name" />
            <input type="text" placeholder="enter email" />
            <input type="text" placeholder="enter password" />
            <button><Link to="/login">REGISTER</Link></button>
        </div>
    )
}

export default Register;