import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPages/Navbar";
import Footer from "../pages/SharedPages/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;