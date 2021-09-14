import React, { useEffect, useState } from "react";
import { requests } from "../../api/requests";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import "./shop.css";

export default function Shop() {
  let effect = async () => {
    try {
      let res = requests.products.getProducts();
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);
  return (
    <div className="container">
      {/* <SideBar /> */}
      <div className="content">{/* <Header /> */}</div>
    </div>
  );
}
