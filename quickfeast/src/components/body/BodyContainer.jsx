import { useEffect, useState } from "react";
import { CardContainer } from "./CardContainer";
import { SearchComponent } from "./SearchComponent";
import './Style.css';
import { useOutletContext } from "react-router-dom";
export const BodyContainer = () => {
    const {data} = useOutletContext(); // this hook will give the data we collected from the api call.
    const [restaurants, setRestaurants] = useState(data);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState(false);

    /*
    
    // We can do the data fetching from below code also but this will get called everytime when there is routing taking place to this component , because using <Outlet/> Component and using react-roter it unmounts the old component and mounts the new component. Hence the fetchData function will get called once during the mounting/loading phase of the component.
    
    const fetchData = async () => {
        const data = await fetch('https://mocki.io/v1/9f96f264-1694-4f37-943c-022f5d414244');
        const jsondata = await data.json();
        console.log(jsondata);
        setRestaurants(jsondata);
        setDataFetched(true);
    }
    useEffect(()=> {
        setTimeout(()=>{
            fetchData();
        },2000);
    },[]);

    */

    useEffect(()=>{
        setRestaurants(data);
    },[data])

    useEffect(()=> {
        if(!searchQuery){
            setFilteredRestaurants(restaurants);
        }
    },[restaurants, searchQuery]);

    
    const searchHandler = (searchText) => {
        const filteredRestaurants = restaurants.filter((item, index)=> {
            const cuisines = item.info.cuisines.map((item, index)=> {
                return item.toLowerCase();
            });
            const resName = item.info.name.toLowerCase();
            return cuisines.includes(searchText.toLowerCase()) || resName.includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(filteredRestaurants);
        setSearchQuery(!!searchText);
    };

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = restaurants.filter((item, index)=> {
            return item.info.avgRating > 4.5
        });
        setFilteredRestaurants(topRatedRestaurants)
        setSearchQuery(true);
    };

    return(
        <div className="bodycontainer">
           <SearchComponent searchHandler={searchHandler} filterTopRatedRestaurants={filterTopRatedRestaurants}/>
            { (filteredRestaurants.length || !searchQuery) ? <CardContainer restaurants={filteredRestaurants}/> : <div className="mg-top">No Data Found</div>}
        </div> 
    );
}