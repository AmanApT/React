import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice.js";

const AccordianItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action, item is the payload
    dispatch(addItems(item));
  };

  return (
    <div className="flex justify-between mb-3 py-4 border-gray-500 border-solid border-b-[1px]">
      <div>
        <p className="font-extrabold">{item.name}</p>
        <p>₹ {item.price ? item.price / 100 : item.defaultPrice / 100}</p>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="w-5/12 relative">
        <img
          className="w-24 ml-auto"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
          alt="food"
        />
        <div
          onClick={() => handleAddItem(item)}
          className="absolute bottom-0 left-10 bg-black text-white rounded text-center"
        >
          Add +
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
