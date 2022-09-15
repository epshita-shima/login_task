import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import ModalOpen from "../ModalOpen";

const Header = () => {
  return (
    <section>
      <nav className="navbar navbar-expand navbar-dark bg-[#0265A3] px-2">
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

        <div className=" dropdown">
          <button
            className="btn bg-transparent border-white hover:text-white dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Change password
          </button>
          <ul className="dropdown-menu profile-logo">
            {/* <li>
              <a href="#" className="dropdown-item">
                Your Profile
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Log Out
              </a>
            </li> */}

            <ModalOpen></ModalOpen>
          </ul>
        </div>
      </nav>
    </section>
  
  );
};

export default Header;
