import React from "react";
import "./Resume.css";

function Resume(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="homepageimg" src={props.resumeImg} />

        <div className="resume-text">
          <h2>{props.title}</h2>
          <br />
          <br />
          <br />
          <h1>{props.subtitle}</h1>
          <br />
          <div className="ssubtitle-text"><h3>{props.ssubtitle}</h3></div>
          <br />
          <div className="text-box">
        <p>{props.text}</p>
        </div>
        </div>

      </div>
    </>
  );
}

export default Resume;
