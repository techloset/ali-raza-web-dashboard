import React from "react";
import notification from "../assets/notification.svg";

export default function Header() {
  return (
    <div className="bg-white flex lg:justify-between  ">
      <div className="font-bold font-sans text-[2rem] w-[90%] lg:h-[2.438rem] mt-[2.5rem] ml-[2rem]">
        Good Morning, Gavano!
      </div>
      <div>
        <img
          src={notification}
          alt="notification-icon"
          className="bg-neutral-200 mx-16 mt-12 text-4xl border rounded-xl "
        />
      </div>
    </div>
  );
}
