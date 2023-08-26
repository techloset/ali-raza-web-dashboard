import React from "react";
import { HiOutlineBell } from "react-icons/hi";

export default function Header() {
  return (
    <div className="bg-white flex justify-between ">
      <div className="font-bold font-sans text-[2rem] w-auto lg:h-[2.438rem] mt-[2.5rem] ml-[2rem]">
        Good Morning, Gavano!
      </div>
      <div>
        <HiOutlineBell className="bg-neutral-200 mx-16 mt-12 text-4xl border rounded-xl " />
      </div>
    </div>
  );
}
