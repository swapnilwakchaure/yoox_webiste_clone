import { Link } from "react-router-dom";
import "../styles/Navbar1.css"
function Navbar() {
    return (
        <div>
            <div class="navbar1">
                <div>
                    <Link to="/location">LOCATION</Link>
                    <Link to="/customercare">CUSTOMER CARE</Link>
                </div>
                <p>FREE STANDARD DEVLIVERY ON ORDERS OVER $250</p>
                <div>
                    <Link to="/register">REGISTER</Link>
                    <Link to="/login">LOGIN</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;