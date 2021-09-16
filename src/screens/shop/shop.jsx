import React, { useEffect, useState } from "react";
import { requests } from "../../api/requests";
import FeatherIcon from "feather-icons-react";
import "./shop.css";
import FeatherIcon from "feather-icons-react";

export default function Shop({ history }) {
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
  function onEditClick() {
    history.push("/restaurant-edit");
  }
  return (
    <div className="item-container">
      {items.map((e, i) => {
        return (
          <div className="item" key={i}>
            <img src={e.photo_url} />
            <div className="foodsname">
              <div className="names">
                <h1>{e.name}</h1>
                {e.description}
              </div>
              <div className="button">
                <button>
                  {" "}
                  <FeatherIcon icon={"trash-2"} />
                  <p>Dalete</p>
                </button>
                <button>
                  {" "}
                  <FeatherIcon icon={"edit"} />
                  <p onClick={onEditClick}>Edit</p>{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
