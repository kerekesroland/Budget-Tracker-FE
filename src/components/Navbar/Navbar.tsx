import React from "react";
import "./styles.css";
import { HiMenuAlt3 as MenuIcon } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../SVG/Logo";
import SearchBar from "../SearchBar/SearchBar";

interface IProps {}

const Navbar = (props: IProps) => {
  return (
    <div className="nav__container">
      <Link to="/">
        <Logo width={165} height={65} />
      </Link>

      <SearchBar />

      <ul className="nav__links">
        <Link className="nav__link" to="/overview">
          Overview
        </Link>

        <Link className="nav__link" to="/finance">
          Finance
        </Link>

        <Link className="nav__link" to="#">
          Calendar
        </Link>

        <Link className="nav__link" to="#">
          Events
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
