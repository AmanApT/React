import { Link } from "react-router-dom";

const RestaurantCard = ({ item }) => {
  return (
    <Link to={"/restaurant/" + item?.info?.id}>
      <div data-testid="resCard" className="res-card">
        <img
          className="momos"
          alt="momos"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item?.info?.cloudinaryImageId
          }
        />
        <p>{item?.info.name}</p>
        <p>{item?.info.cuisines.join(", ")}</p>
        <p>
          {item?.info.avgRating ? item.info.avgRating + " stars" : "5 stars"}
        </p>
        <p>{item?.info.sla.deliveryTime + " minutes"} </p>
      </div>
    </Link>
  );
};
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (prop) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg shadow-slate-200">
          Promoted
        </label>
        <RestaurantCard {...prop} />
      </div>
    );
  };
};
