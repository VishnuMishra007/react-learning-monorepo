import { useState } from "react";

export const SearchComponent = (props) => {
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        props.searchHandler(searchText);
    }
    return(
        <div className="mt-10 mb-8">
            <input id="searchbox" className="border p-1 rounded-lg mr-2" onChange={(e)=> setSearchText(e.target.value)} placeholder="Search"/>
            <button className="border p-1 rounded-lg bg-gray-200 shadow-2xl" onClick={handleSearch}>Search</button>
            <button className="ml-2.5 border p-1 rounded-lg bg-gray-200" onClick={props.filterTopRatedRestaurants}>Top Rated Restaurants ⭐</button>
        </div>
    );
}