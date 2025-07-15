import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import ConnectionModalUI from "./ConnectionModalUI";
import { useEffect, useState } from "react";
import '../index.css';
//chunking 
//code splitting 
//dynamic bundling
//lazy loading
//On Demand Loading 

const AppLayout = () => {
    const [data, setData] = useState([]);
    const restaurantData = require('../utils/dummy.json');
    //we are doing the data fetching here to avoid same data fetching everytime the <BodyContainer/> component is mounted while routing. 
   const fetchData = async () => {
        // const data = await fetch('https://mocki.io/v1/c3a5bee6-9d16-444c-9d5b-0129e8bf3200');
        // const jsondata = data.json();
        // console.log(jsondata);
        setData(restaurantData.restaurants);
        // setData([]);
    }
    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        },3000);
    },[]);

    return(
       <div className="app-container w-12/12">
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