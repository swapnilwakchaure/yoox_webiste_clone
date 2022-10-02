import { Link } from "react-router-dom";
import "../styles/Navbar2.css"

function Navbar2() {
    return (
        <div class="navbar2">
            <div>
                <Link to="/women">WOMEN</Link>
                <Link to="/men">MEN</Link>
                <Link to="/kids">KIDS</Link>
                <Link to="/homedecorart">HOME DECOR + ART</Link>
            </div>
            <div id="multicolor">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNZoV6T0AsI96UyXMdVliy8VFLpSN8U6Vdw&usqp=CAU" 
                    alt="yoox_image" />
                </Link>
            </div>
            <div id="icons">
                <Link to="/search">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpfeNLNHW3fpqIAZkHuot55dSB5-fEZ5tHQ&usqp=CAU"
                    alt="search_image" />
                </Link>
                <Link to="/favorite">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStx3wudbk7G5I8UutQx3q_0rtaWOGpUWrtQ&usqp=CAU" 
                    alt="favorite_image" />
                </Link>
                <Link to="/cart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1WIKsiWgnQwwoFsrL5ZMs89jyPluPnt_rw&usqp=CAU" 
                    alt="cart_image" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar2;