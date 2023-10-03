import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between mt-5 items-center">
            <HeaderLogo></HeaderLogo>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;