import React from "react";
import NavBar from "../components/NavBar";
import ForCalculatrice from "../components/ForCalculatrice";
import ExpImg from "../assets/BackgroundHome.avif";

function Calculatrice() {
  return (
    <>
      <NavBar />
      <ForCalculatrice 
      cName="forcalculatrice" 
      resumeImg={ExpImg} 
      
      />
      
    </>
  );
}

export default Calculatrice;
