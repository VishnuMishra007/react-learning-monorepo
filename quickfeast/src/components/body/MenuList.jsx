import { useState } from "react";
import { imageBaseURL } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const MenuList = (props) => {
    const [expanded, setExpanded] = useState();
    const dispatch = useDispatch();
    const toggleAccordion = () => {
        setExpanded(!expanded);
    };
    const dataList = props.dataList.itemCards || props.dataList.categories.reduce((acc, item)=>{
        item.itemCards.map((item2)=>{
            return acc.push(item2);
        });
        return acc;
    },[]);

    const handleAddToCart = (item) => {
        console.log('addToCart clicked');
        dispatch(addToCart({uniqueId: item.id, value: item}));
    };

    return(
        <>
            <div id={'accordion_header_'+props.suffix} className="flex justify-between m-auto mt-5 text-center shadow-lg p-4 rounded-lg cursor-pointer" onClick={toggleAccordion}>
                <span className="text-xl font-bold">{props.dataList.title}</span>
                <span className="text-2xl font-bold">{expanded ?'⬆️' :'⬇️'}</span>
            </div>
            <div id={'accordion_description_'+props.suffix}>
            { 
                expanded && <div className="mt-6 shadow-lg border-b-2 border-gray-200 p-3 rounded-lg">
                        <div className="w-12/12">
                            { dataList && dataList.map((item)=>{
                               return <div key={item.card.info.id} className="flex w-12/12">
                                        <div className="text-left p-4 flex justify-between w-12/12 shadow-lg mt-2">
                                            <div className="w-8/12">
                                                <label className="text-xl font-bold flex flex-col"><span>{item.card.info.name}</span><span>₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span></label>
                                                <p className="mt-2">{item.card.info.description}</p>
                                            </div>
                                            <div className="p-2 rounded-lg flex flex-col justify-end">
                                                <img className="w-32 h-32 rounded-lg" src={imageBaseURL+'/'+item.card.info.imageId}/>
                                                <button className="absolute border-2 border-gray-300 p-0.5 text-green-600 bg-white font-black w-15 rounded-lg hover:bg-gray-200 cursor-pointer" onClick={() => handleAddToCart(item.card.info)}>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                            })}
                        </div>
                   </div>
            }
            </div>
        </>
    );
};

export default MenuList;