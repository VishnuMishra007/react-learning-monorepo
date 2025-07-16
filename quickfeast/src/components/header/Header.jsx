import { AppLogo } from "./AppLogo";
import { NavItems } from "./NavItems";
import '../../index.css';
export const Header = () => {
    console.log('Header Mounted');
    return (
         <div className="header_container">
            <AppLogo/>
            <NavItems/>
        </div>
    );
};