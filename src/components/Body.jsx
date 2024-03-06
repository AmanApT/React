import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [resList, setResList] = useState();
  const [filteredResList, setFilteredResList] = useState([]);
  const [input, setInput] = useState("");

  const { userName, setName } = useContext(UserContext);

  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

  const filterList = () => {
    const newList = resList.filter((item) =>
      item.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredResList(newList);
  };

  const url =
    "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373";
  useEffect(() => {
    const data = async () => {
      // try {
      let swiggyData = await fetch(url);
      swiggyData = await swiggyData.json();
      swiggyData =
        swiggyData.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;
      setResList(swiggyData);
      console.log(resList);
      // } catch (e) {
      //   console.log(e);
      // }
    };
    data();
  }, []);

  if (!resList) {
    return (
      <div className="body">
        <input
          className="search-bar"
          placeholder="Search by Name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
        <button onClick={filterList} className="button-5">
          Click to Filter
        </button>
        <input
          style={{ margin: "0.5rem" }}
          className="search-bar"
          placeholder=""
          onChange={(e) => setName(e.target.value)}
          value={userName}
          type="text"
        />

        <div className="res-container">
          <Shimmer />
        </div>
      </div>
    );
  }
  return (
    <div className="body">
      <input
        className="search-bar"
        placeholder="Search By Name"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />

      <input
        className="search-bar"
        placeholder="S"
        onChange={(e) => setName(e.target.value)}
        value={userName}
        type="text"
      />

      <button onClick={filterList} className="button-5">
        Click to Filter
      </button>
      <div className="res-container">
        {filteredResList.length != 0
          ? filteredResList.map((item, id) =>
              item.info.promoted ? (
                <PromotedRestaurant key={id} item={item} />
              ) : (
                <RestaurantCard key={id} item={item} />
              )
            )
          : resList.map((item, id) =>
              item.info.promoted ? (
                <PromotedRestaurant key={id} item={item} />
              ) : (
                <RestaurantCard key={id} item={item} />
              )
            )}
      </div>
    </div>
  );
};
export default Body;
