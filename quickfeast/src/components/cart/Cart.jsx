import { useDispatch, useSelector } from "react-redux";
import { DeleteButton } from "../body/UXComponents";
import { deleteItemFromCart } from "../../store/cartSlice";
import { imageBaseURL } from "../../utils/utils";

const Cart = () => {
    const itemList = useSelector((state) =>  state.cart) || [];
    const dispatch = useDispatch();
    console.log(itemList);

    const onDeleteHandler = (index) => {
        dispatch(deleteItemFromCart(index));
    };

    return(
        <div className="m-16 flex justify-center flex-col">
            <header className="text-9xl font-semibold">🛒</header>
            <div className="mt-5">
                    { itemList.length<=0 ? <p className="font-semibold text-2xl mt-10 text-red-800">Empty Cart<span> :-)   !!  </span></p> : itemList.map((item, index)=>{
                        return (
                        <div key={item.id+''+index} className="flex justify-between border w-8/12 p-4 rounded font-semibold shadow-lg mt-5 text-emerald-900 bg-[#e1e9e1]">
                            <div className="flex justify-items-start text-center mt-auto mb-auto ml-0 mr-0 h-11 w-8/12 text-2xl">
                                <p className="flex pl-0 ml-0">{item.value.name}</p>
                                <span className="w-24 flex font-bold ml-25">₹ {item.value.price ? item.value.price/100 : item.value.defaultPrice/100}</span>
                            </div>
                            <div className="flex justify-between text-center mt-auto mb-auto ml-0 mr-0 w-2/12 ">
                                <div className="flex">
                                    <img src={imageBaseURL+'/'+item.value.imageId} className="h-20 w-20 rounded"/>
                                </div>
                                <span className="flex"><DeleteButton onDeleteHandler={()=> onDeleteHandler(index)}/></span>
                            </div>
                        </div> );
                    })}
            </div>
        </div>
    );
};


export default Cart;