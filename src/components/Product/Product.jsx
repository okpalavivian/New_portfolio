import React from "react";
import "./Product.css";

const Product = ({ img, link }) => {
  return (
    <div className="p1">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <a href={link} target="_blank">
          <img src={img} alt="" className="p-img" />{" "}
        </a>
      </div>
    </div>
  );
};
export default Product;
