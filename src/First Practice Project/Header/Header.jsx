import React from "react";
import logo from "./investment-calculator-logo.png"
import './Header.css'

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}
