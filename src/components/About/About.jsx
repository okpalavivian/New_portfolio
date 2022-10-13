import React from "react";
import "./About.css";
import img2 from "../../img/img2.jpg";
import img4 from "../../img/img4.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg">
          <div className="a-card">
            <img src={img2} alt="" className="a-img" />
          </div>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"> About Me</h1>
        <p className="a-sub">
          I am a Web Developer who develops, Manages and Designs Responsive,
          Unique beautiful sites,
        </p>
        <p className="a-desc">
          {" "}
          I have very good skills in Javscript(ReactJs, NextJs, Angular and
          Vue), CSS( Bootstrap, Tailwind and SASS) and HTML.
        </p>
        <div className=" a-award">
          <img src={img4} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h4 className="a-award-title"> International Design Award 2022</h4>
            <p className="a-award-desc">
              As a result of my hardwork in the world of web development am
              anicipating that I really deserve an Award such as International
              Award 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
