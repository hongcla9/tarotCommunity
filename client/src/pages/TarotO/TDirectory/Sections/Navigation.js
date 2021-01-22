import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/tarotdirectory">Home</Link>
      <Link to="/tarotboard/major-arcana">메이저 아르카나</Link>
      <Link to="/tarotdirectory/"> Login </Link>
    </div>
  );
}

export default Navigation;
