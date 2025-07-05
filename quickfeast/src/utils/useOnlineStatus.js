import { useEffect, useState } from "react"
//This is a custom hook designed to check the user online Status.

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=> {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    },[]);
    
    return onlineStatus;
};

export default useOnlineStatus;