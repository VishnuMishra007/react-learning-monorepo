import { useState } from "react";

export const SearchComponent = (props) => {
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        props.searchHandler(searchText);
    }
    return(
        <div className="searchcontainer">
            <input className="search" onChange={(e)=> setSearchText(e.target.value)}/>
            <button className="searchbtn" onClick={handleSearch}>Search</button>
            <button className="mg-left" onClick={props.filterTopRatedRestaurants}>Top Rated Restaurants</button>
        </div>
    );
}