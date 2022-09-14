import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronDown, faRefresh } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <sec tion id="side-nav" className="">
      <div className="side-nav-content">
      <a className="navbar-brand text-light fw-bold icon-refresh-style " href="#"  >
         <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon> <span className="icon-refresh">Refresh</span>
        </a>
        <ul className="nav-list">
          <li className="nav-list-item">
              <a
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon>Home</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
              </a>
              <ul class="collapse side-dropdown" id="collapseExample">
                 <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a 
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >
            <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon> About</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
            <ul class="collapse side-dropdown" id="collapseExample3">
                    <li><a href="#">About 1</a></li>
                    <li><a href="#">About 2</a></li>
                    <li><a href="#">About 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a 
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >
            <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon>Contact</span>
            <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
            <ul class="collapse side-dropdown" id="collapseExample4">
                    <li><a href="#">About 1</a></li>
                    <li><a href="#">About 2</a></li>
                    <li><a href="#">About 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </sec>
  );
};

export default Sidebar;
