import React from "react";
import NavBar from "../components/NavBar";
import ForCalculatrice from "../components/ForCalculatrice";
import ExpImg from "../assets/BackgroundHome.avif";

function Calculatrice() {
  return (
    <>
      <NavBar />
      <ForCalculatrice cName="forcalculatrice" resumeImg={ExpImg} />
      <footer style={{ textAlign: "center", margin: "20px 0", color: "black" }}>
        © {new Date().getFullYear()} Sam Rainsy. Tous droits réservés.
      </footer>
    </>
  );
}

export default Calculatrice;
