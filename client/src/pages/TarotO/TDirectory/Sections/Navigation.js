import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/tarotdirectory">Home</Link>
      <Link to="/tarotboard/major-arcana">Major Arcana</Link>
      <Link to="/tarotdirectory/wands"> wands</Link>
      <Link to="/tarotdirectory/cups">cups </Link>
      <Link to="/tarotdirectory/swords">swords</Link>
      <Link to="/tarotdirectory/pentacles">pentacles </Link>
    </div>
  );
}

export default Navigation;
