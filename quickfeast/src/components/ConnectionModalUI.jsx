import '../index.css';
import { useEffect,useState } from "react";
import useOnlineStatus from '../utils/useOnlineStatus';
const ConnectionModalUI = () => {
    const onlineStatus = useOnlineStatus(); //Custom Hook designed to get the online status
    const [showModal, setShowModal] = useState(!onlineStatus);
    useEffect(()=>{
        if(onlineStatus===true){
            document.body.style.overflow = "auto";
            setTimeout(()=>{
                setShowModal(false);
            },3000);
        }else{
            document.body.style.overflow = "hidden";
            setShowModal(true);
        };
    },[onlineStatus]);
    const statusHeading = onlineStatus ? 'Connection Established': 'Connection Error';
    const statusMessage = onlineStatus ? 'Please try refreshing the page now.': 'Please check your internet connection and try again.';
    const reLoadPage = () => {
        window.location.reload();
    }

    console.log('onlineStatus is ', onlineStatus);
    if(!showModal) return;
    return(
        <div className="connectionmodalcontainer">
            <div >
                <h1>{statusHeading}</h1>
                <h3>{statusMessage}</h3>
            </div>
            {
            onlineStatus && <div>
                <button className="refreshbtton" onClick={reLoadPage}>Reload 🔃</button>
            </div>
            }  
        </div> 
    );
};

export default ConnectionModalUI;