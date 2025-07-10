import { ShimmerUI } from "../ShimmerUI";
import RestaurantCard from "./RestaurantCard";
import getRestaurantCardWithPromotion from "../hocs/getRestaurantCardWithPromotion";


export const CardContainer = (props) => {

    const RestaurantCardWithPromotion = getRestaurantCardWithPromotion(RestaurantCard);
    
    return(
        props.restaurants.length===0 ?
        <ShimmerUI/> :
        <div className="cardcontainer">
            {
                props.restaurants && props.restaurants.map((item,index)=> {
                    return(
                        <div key={item.info.id+`${index}`}>
                            {item.info.promoted ? <RestaurantCardWithPromotion resData={item}/> : <RestaurantCard resData={item}/>}
                        </div>
                    );
                })
            }
        </div>
    );
}