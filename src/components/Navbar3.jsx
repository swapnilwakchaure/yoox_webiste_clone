import { Link } from "react-router-dom";
import "../styles/Navbar2.css";

function Navbar3() {
    return (
        <div id="navbar3">
            <Link to="/newanimals"><p>NEW ANIMALS</p></Link>
            <Link to="/designers"><p>DESIGNERS</p></Link>
            <Link to="/clothing"><p>CLTOHING</p></Link>
            <Link to="/shoes"><p>SHOES</p></Link>
            <Link to="bagsandaccessories"><p>BAGS & ACCESSORIES</p></Link>
            <Link to="/bywork"><p>8 BY WORK</p></Link>
            <Link to="/yoxygen"><p>YOXYGEN</p></Link>
            <Link to="/moreyou"><p>MORE 4 YOU</p></Link>
            <Link to="/collaboration"><p>COLLABORATION</p></Link>
            <Link to="/sale"><p>SALE</p></Link>
        </div>
    )
}

export default Navbar3;