import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import ConnectionModalUI from "./ConnectionModalUI";
import { useEffect, useState } from "react";

//chunking 
//code splitting 
//dynamic bundling
//lazy loading

const AppLayout = () => {
    const [data, setData] = useState([]);
    
    //we are doing the data fetching here to avoid same data fetching everytime the <BodyContainer/> component is mounted while routing. 
   const fetchData = async () => {
        const data = await fetch('https://mocki.io/v1/9f96f264-1694-4f37-943c-022f5d414244');
        const jsondata = await data.json();
        console.log(jsondata);
        setData(jsondata);
    }
    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        },3000);
    },[]);

    return(
       <div className="app-container">
        <Header/>
        <br></br>
        <br></br>
        <hr/>
        <ConnectionModalUI/>
        <Outlet context={{data}}/>
        </div>
    );
};

export default AppLayout;