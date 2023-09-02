import React from "react";
import "./ForExplication.css";

function ForExplication(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="homepageimg" src={props.resumeImg} />

        <div className="forexplication-text">
          <h2>{props.title}</h2>
          <br />
          <div className="text1-box">
            <p>{props.text1}</p>
          </div>
          <div className="text2-box">
            <p>{props.text2}</p>
          </div>
          <div className="text3-box">
            <a
              href="https://drive.google.com/file/d/1eGJXsuaRegIyymLXJ9F5ItPqp5Oxk1s5/view"
              rel="noreferrer"
              target="_blank"
            >
              {props.text3}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForExplication;
