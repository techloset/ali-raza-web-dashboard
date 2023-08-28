import React from "react";
import UpArrow from "../assets/UpArrow.svg";
import DownArrow from "../assets/DownArrow.svg";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
  rel="stylesheet"
/>;

function Revenue() {
  return (
    // <div className="grid   lg:w-[67.625rem]  max-w-fit">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-[1.5rem] items-center bg-white rounded-3xl p-4 shadow-xl ">
      <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
        <span className="flex space-x-2 text-neutral-400 text-sm  font-bold">
          Available to withdraw
          <p className="flex items-center w-[48px] h-[21px] bg-neutral-200 border rounded-xl text-xs text-black ml-5">
            <img src={UpArrow} alt="Arrow" className="w-3" />
            10.0%
          </p>
        </span>
        <div className="text-[1.75rem] text-blue-900 font-montserrat font-bold">
          $1,567.99
        </div>
        <div className="text-xs md:text-sm font-base">Wed, July 20</div>
      </div>

      <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
        <span className="flex text-black text-base font-medium">
          Today Revenue
          <p className="flex items-center  w-[48px] h-[21px] bg-red-200 border rounded-xl text-xs  text-red-600 ml-5">
            <img src={DownArrow} alt="Arrow" className="w-3" />
            3.0%
          </p>
        </span>
        <div className="text-[1.75rem]  text-blue-900 font-montserrat font-bold">
          $2,868.99
        </div>
        <div className="text-xs md:text-sm font-base">143 orders</div>
      </div>

      <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
        <span className="flex text-black text-base font-medium">
          Total Sessions
          <p className="flex items-center w-[48px] h-[21px] bg-neutral-200 border rounded-xl text-xs ml-5">
            <img src={UpArrow} alt="Arrow" className="w-3" />
            3.2%
          </p>
        </span>
        <div className="text-[1.75rem] text-blue-900 font-montserrat font-bold">
          156K
        </div>
        <div className="text-xs md:text-sm font-base">32k Visitors</div>
      </div>

      <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
        <span className="flex text-black text-base font-medium">
          Subscribers
          <p className="flex items-center w-[48px] h-[21px] bg-neutral-200  border rounded-xl text-xs text-blue-500 ml-5">
            <img src={UpArrow} alt="Arrow" className="w-3 " />
            8.3%
          </p>
        </span>
        <div className="text-[1.75rem] text-blue-900 font-montserrat font-bold">
          3,422
        </div>
        <div className="text-xs md:text-sm font-base">$34.28 Average Order</div>
      </div>
    </div>
    // </div>
  );
}

export default Revenue;
