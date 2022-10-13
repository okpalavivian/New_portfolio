import React from "react";
import "./footer.css";

const Footer = () => {
  const fname = "OV";
  const lname = "Code Dev";
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="f">
      <div className="f-texts">Terms and Conditions</div>
      <div className="f-texts">Privacy policy</div>

      <div className="f-texts">
        <p>Copyright© {year}. </p>
        <p>
          Developed and Designed by {fname} {lname}
        </p>
      </div>
    </div>
  );
};
export default Footer;
