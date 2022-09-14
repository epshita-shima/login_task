import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import "../component/DashboardNew.css";
import ModalOpen from "../component/ModalOpen";

const DashboardNew = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [popOpen, setPopOpen]=useState(false)


  // const [removeBlur, setRemoveBlur]=useState(true)
  // useEffect(()=>{
  //  const blur= document.body.className="main-screen-blur: filter[0px]";
  // //   setRemoveBlur(!removeBlur)
  // },[])

  useEffect(() => {
    setTimeout(() => {
      setNavOpen(!navOpen);
    }, 2000);
  }, []);

  useEffect(()=>{
    setPopOpen(!navOpen)
  },[])

  return (
    <div className="w-full">
      <div className="h-screen flex flex-col items-center justify-center transition ease-in-out delay-500  popup-screen">
      <button class={`alert mx-auto flex flex-col items-center justify-center container w-1/3 alert-error shadow-lg absolute top-[50%] ${!popOpen ? "openPop" : 'hidden'}`}>
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>To see the change password form, please relaod</span>
          </div>
        </button>
        <div className={`relative ${navOpen ? "popup-box" : "hidden bg-red-600 p-4"}`}>
          <ModalOpen></ModalOpen>
        </div>
       
      </div>
      <div className="main-screen">
        <div>
          <div id="#content">
            <Header></Header>
          </div>
        </div>
        <main>
          <div className="display-area p-3">
            <p className="fs-1 fw-bold fst-italic">Main display area</p>
          </div>
        </main>
      </div>
    </div>
  );
};
export default DashboardNew;
