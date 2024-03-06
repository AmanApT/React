import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resData = useRestaurantMenu(id);

  const [index, showIndex] = useState(0);
  return (
    <div>
      {resData.map((item, id) => (
        <Accordian
          key={id}
          item={item.card.card}
          toggleAccordian={id === index ? true : false}
          showIndex={() => {
            showIndex(id);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
