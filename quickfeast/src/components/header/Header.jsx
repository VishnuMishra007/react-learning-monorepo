// import { Outlet } from "react-router-dom";
import { AppLogo } from "./AppLogo";
import { NavItems } from "./NavItems";
import '../../index.css';
export const Header = () => {
    return (
    //  <div className="app-container">
    //     <div className="header_container">
    //         <AppLogo/>
    //         <NavItems/>
    //     </div>
    //     <br></br>
    //     <br></br>
    //     <hr/>
    //     <Outlet/>
    //     </div>
         <div className="header_container">
            <AppLogo/>
            <NavItems/>
        </div>
    );
};