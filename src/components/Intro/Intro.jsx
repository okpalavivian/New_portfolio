import React from "react";
import me from "../../img/me.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2>Hello, My name is </h2>
          <h1 className="i-intro">Vivian Okpala</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Web Developer </div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Back End Developer</div>
              <div className="i-title-item"> Graphics Designer </div>
              <div className="i-title-item"> Front End Developer </div>
            </div>
          </div>
          <div className="i-desc">
            I have the zeal, passion and love to design and develop services
            from various customers of all sizes, specializes in creating
            stylish, morden websites, web services, online stores etc.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};
export default Intro;
