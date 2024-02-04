//Importing for React
import styled from "styled-components";
import React, { useState, useContext } from "react";

//Importing icons/svgs
import { ReactComponent as Logo } from "../images/Logo.svg";

export default function Nav() {
  return (
    <>
    {/* Greater container keeping a child containing two children, Keeping then centered */}
      <nav>
        {/* container housing two pieces, Keeping then centered */}
        <div className="navContainer">
        {/* The logo and the ul will be two children of the nav parent with space in between. */}
        <Logo />
        {/* The ul will house link items which will be on the riht side with space between */}
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>menu</a>
          </li>
          <li>
            <a>reservations</a>
          </li>
          <li>
            <a>order online</a>
          </li>
          <li>
            <a>login</a>
          </li>
        </ul>

        </div>
      </nav>
    </>
  );
}
