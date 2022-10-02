import "../styles/Navbar2.css";
import { Link } from "react-router-dom";
import ImageSlider from "../slider/ImageSlider";
import Images from "../slider/images";
import Slider from "../carousal/Slider";
import Footer from "../pages/Footer";

function NewAnimals() {
    return (
        <div>
            <div class="gfg">
                <img src="https://www.yoox.com/images/yoox80/banners/6950_3_Premium_DM.png?634485886717693847#width=1379&height=67"
                    alt="offers_image" />
                <h3 class="first-txt">THE BIGGEST SALE EVER: UP TO 95% OFF</h3>
                <p class="second-txt">Ends 1/10</p>
            </div>
            <div id="branding" class="gfg">
                <img src="https://www.yoox.com/images/yoox80/banners/5460_1_Myar_main.jpg?634485886717693847&impolicy=cropDefault&width=960&height=510" 
                alt="girls_image" />
                <div class="third-txt">
                    <h4>RETHINKG WITH</h4>
                    <p>MYAR X YOOX</p>
                    <p>DISCONVER THE CAPSULE</p>
                    <p>SHOW NOW</p>
                </div>
            </div>
            <div>
                <p>NEW ARRIVALS</p>
                <p><Link>VIEW ALL</Link></p>
            </div>
            <Slider />
            <ImageSlider images={ Images } />
            <Footer />
        </div>
    )
}

export default NewAnimals;