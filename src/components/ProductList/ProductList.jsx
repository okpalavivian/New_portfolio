import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { Deals } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="pl-title"> Create & inspire, It's SUV</h2>
        <p className="pl-desc">
          OVU is a creative portfolio that your work/project has been waiting
          for to design Beautiful Websites, stunning company/individual
          portfolios's, Booking apps, online-shops, company apps etc. & a whole
          lot more.
        </p>
      </div>
      <div className="pl-list">
        {Deals.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
