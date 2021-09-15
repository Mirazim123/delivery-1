import React, { useEffect, useState } from "react";
import { requests } from "../../api/requests";
import "./shop.css";

export default function Shop() {
  const [items, setItems] = useState([]);
  let effect = async () => {
    try {
      let res = await requests.products.getRestaurants();
      setItems(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);
  return (
    <div className="item-container">
      {items.map((e, i) => {
        return (
          <div className="item" key={i}>
            <img src={e.photo_url} />
          </div>
        );
      })}
    </div>
  );
}
