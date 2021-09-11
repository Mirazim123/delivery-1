import React from "react";
import MenuItem from "./MenuItem";
import "./Sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-food-delivery-logo-vector-template-157000359.jpg" />
        <span>Food delivery</span>
      </div>
      <div className="content">
        <MenuItem icon="home" title="Dashboard" link="/dashboard" />
        <MenuItem icon="user" title="Users" link="/users" />
        <MenuItem icon="shopping-cart" title="Products" link="/shop" />
        <MenuItem icon="grid" title="Orders" link="/orders" />
      </div>
    </div>
  );
}
