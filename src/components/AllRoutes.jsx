import { Routes, Route } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Location from "../navbar1/Location";
import CustomerCare from "../navbar1/CustomerCare";
import Register from "../navbar1/Register";
import Login from "../navbar1/Login";
import Navbar2 from "./Navbar2";
import Women from "../navbar2/Women";
import Men from "../navbar2/Men";
import Kids from "../navbar2/Kids";
import HomeDecorArt from "../navbar2/HomeDecorArt";
import Home from "../navbar2/Home";
import Search from "../navbar2/Search";
import Cart from "../navbar2/Cart";
import Navbar3 from "./Navbar3";
import NewAnimals from "../navbar3/NewAnimals";
import Designers from "../navbar3/Designers";
import Clothing from "../navbar3/Clothing";
import Shoes from "../navbar3/Shoes";
import BagsAndAccessories from "../navbar3/BagsAndAccessories";
import ByWork from "../navbar3/ByWork";
import Yoxygen from "../navbar3/Yoxygen";
import More4You from "../navbar3/More4You";
import Collaboration from "../navbar3/Collaboration";
import Sale from "../navbar3/Sale";
import PrivateRoute from "./PrivateRoute";
import Description from "../pages/Description";
import NotFound from "../pages/NotFound";

function AllRoutes() {
    return (
        <div>
            <Navbar1 />
            <Routes>
                <Route path="/location" element={<Location />}></Route>
                <Route path="/customercare" element={<CustomerCare />} ></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Navbar2 />
            <Routes>
                <Route path="/women" element={<Women />}></Route>
                <Route path="/men" element={<Men />}></Route>
                <Route path="/kids" element={<Kids />}></Route>
                <Route path="/homedecorart" element={<HomeDecorArt/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
            </Routes>
            <Navbar3 />
            <Routes>
                <Route path="/newanimals" element={<NewAnimals />}></Route>
                <Route path="/designers" element={<Designers />}></Route>
                <Route path="/clothing" element={<Clothing />}></Route>
                <Route path="/shoes" element={<Shoes />}></Route>
                <Route path="/bagsandaccessories" element={<BagsAndAccessories />}></Route>
                <Route path="/bywork" element={<ByWork />}></Route>
                <Route path="/yoxygen" element={<Yoxygen />}></Route>
                <Route path="/more4you" element={<More4You />}></Route>
                <Route path="/collaboration" element={<Collaboration />}></Route>
                <Route path="/sale" element={<Sale />}></Route>
                <Route path="/designers/:product_id" element={<Description />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            
        </div>
    )
}

export default AllRoutes;