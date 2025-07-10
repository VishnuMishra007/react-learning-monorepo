import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
    const params = useParams();
    console.log(params);
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        setTimeout(()=>{
            const data = require('../../utils/MenuList.json');
            setMenuList(data.restaurantmenu);
        },3000);
    },[]);

    return(
        menuList.length ?
        <div className="flex w-auto m-auto mt-5 flex-col text-center p-2">
            <h2 className="font-bold text-2xl">Name of the Restaurants</h2>
            <h3 className="justify-center font-bold text-xl">Menu</h3>
            <div className="mt-2.5 w-6/12 m-auto">
                {
                    menuList && menuList.map((item, index)=>{
                        return <div key={item.card.card.title}><MenuList suffix={index.toString()} dataList={item.card.card}/></div>
                    })
                }
            </div>
        </div> :
            <div className="phantom-card w-6/12 border-2 flex m-auto mt-5 flex-col text-center p-2 ">
            <div className="font-bold text-2xl w-6/12"></div>
            <div className="justify-center font-bold text-xl">Loading...</div>
            <div className="mt-2.5 w-6/12 m-auto">
            </div>
        </div>
    );
};

export default RestaurantMenu; 