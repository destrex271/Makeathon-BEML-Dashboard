import React from "react";
import {  Link } from "react-router-dom";


export const Navbar = () => {
    return(
      <nav class="navbar navbar-expand-lg navbar-light custom px-3 justify-space-around">
        <div className="navbar-brand text-white fontBrand">
          <img src={require("../assets/images/logo.png")} alt="Image" width="32%" height="10%" style={{padding:10}}/>
          BEML
        </div>
        <div className="nav-item text-white px-2">
          Home
        </div>
        <div className="nav-item text-white px-2">
          Docs
        </div>
        <div className="nav-item text-white px-2">
          Contact
        </div>
      </nav>
    )
}