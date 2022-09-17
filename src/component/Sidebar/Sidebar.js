import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronDown, faRefresh } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <section tion id="side-nav" className="">
      <div className="side-nav-content bg-gradient-to-r from-cyan-100 to-blue-300">
      <div className="mt-2 ml-10">
      <button className="btn bg-blue-300 border-none hover:bg-[#B88F31]"><a className=" text-[#581C87] hover:text-white text-xl fw-bold" href="#"  >
         <FontAwesomeIcon icon={faRefresh} className=" mr-3"></FontAwesomeIcon> <span>Refresh</span>
        </a></button>
      </div>
        <ul className="nav-list">
          <li className="nav-list-item">
              <a
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="text-[#581C87] hover:text-[#581C87]"
              >
                <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon>Home</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
              </a>
             <ul class="collapse side-dropdown" id="collapseExample">
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 1</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 2</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a 
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="text-[#581C87] hover:text-[#581C87]"
            >
            <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon> About</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
            <ul class="collapse side-dropdown" id="collapseExample3">
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">About 1</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">About 2</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">About 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a 
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="text-[#581C87] hover:text-[#581C87]"
            >
            <span><FontAwesomeIcon icon={faHome} className='icon-style'></FontAwesomeIcon>Contact</span>
            <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
            <ul class="collapse side-dropdown" id="collapseExample4">
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 1</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 2</a></li>
                  <li className="text-[#581C87] hover:text-white"><a className="hover:text-white" href="#">Home 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
