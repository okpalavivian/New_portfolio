import React from "react";
import "./footer.css";

const Footer = () => {
  const fname = "SUV";
  const lname = "CODE";
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="f">
      <div className="f-texts">Terms and Conditions</div>
      <div className="f-texts">Privacy policy</div>

      <div className="f-texts">
      Copyright© {year}
      </div>
      <div>
          Designed and Developed by {fname} {lname}
      
      </div>
    </div>
  );
};
export default Footer;
