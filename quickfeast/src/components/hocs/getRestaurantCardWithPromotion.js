const getRestaurantCardWithPromotion = (Card) => {
  return (resData) => {
        return(
            <>
                <p className="absolute p-2 mt-2 bg-emerald-800 text-white font-bold rounded-lg z-10">Sponsored**</p>
                <Card {...resData}/>
            </>
        );
    }
};


export default getRestaurantCardWithPromotion;