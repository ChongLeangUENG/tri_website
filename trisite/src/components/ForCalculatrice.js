import React from "react";
import Calculator from "./Calculator";

function ForCalculatrice(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="calculator">
          <Calculator />
        </div>
        <img alt="homepageimg" src={props.resumeImg} />

        <div className="forcalculatrice-text">
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
}

export default ForCalculatrice;
