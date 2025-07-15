import { useContext, useEffect, useState } from "react";
// import  { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

export const NavItems = () => {
    // const navigate = useNavigate();
    const userData = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const [isSignIn, setIsSignIn] = useState(true);
    const [signInText, setSignInText] = useState('Sign In');
    const listItems = useSelector((state)=> state.cart);
    const handleSignInSignOut = () => {
        setIsSignIn(!isSignIn);
        setSignInText(!isSignIn? 'Sign In' : 'Sign Out');
    }
    return(
        <div className="navitems_container">
            <ul className="navitems_list">
                <li className="navitems">
                    <span className="online_status">{onlineStatus ? '🛜 🟢': '🛜 🔴'}<span className="online_status_tooltip_text">Internet Status: {onlineStatus ? 'Online': 'Offline'}</span></span>
                </li>
                <li className="navitems">
                    <Link to="/" className="navitemslink">Home</Link>  
                </li>
                <li className="navitems">
                    <Link to="/about" className="navitemslink">About Us</Link>
                </li>
                <li className="navitems">
                    <Link to="/contact" className="navitemslink">Contact Us</Link>
                </li>
                <li className="navitems" onClick={handleSignInSignOut}>
                    <span style={{margin: "5px 0 0 5px"}}><svg className="ppAwf" viewBox="6 0 12 24" height="19" width="18" fill="#686b78"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg></span>
                    <span style={{marginLeft: "5px"}} ><Link to="/signup" className="navitemslink">{signInText}</Link></span>
                </li>
                <li className="navitems">
                    <Link to="/cart" className="navitemslink mr-5">Cart <span className="absolute">🛒<sup className=" flex w-fit p-2 absolute text-red-700 font-bold text-[1.3rem]">{listItems.length>0 ? listItems.length: ''}</sup></span></Link>
                </li>
            </ul>
        </div>
    );
};