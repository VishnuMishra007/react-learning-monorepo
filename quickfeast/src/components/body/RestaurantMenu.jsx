import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const params = useParams();
    console.log(params);
    return(
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>Menu</h2>
            <ul>
                <li>
                    Biryani
                </li>
                <li>
                    Burgur
                </li>
                <li>
                    Coke
                </li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;