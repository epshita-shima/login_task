import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <section>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-2">
        <div className="side-nav-btn p-2 me-3">
          <a
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            className="side-nav-show"
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </a>
          <div class="collapse" id="collapseExample2">
           <Sidebar></Sidebar>
          </div>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Menu 1
              </a>
            </li>
          </ul>
        </div>

        <div className="profile-logo dropstart">
          <button
            className="btn btn-outline-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Infoname
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a href="#" className="dropdown-item">
                Your Profile
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  
  );
};

export default Header;
