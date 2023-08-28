import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className=" flex lg:flex-row flex-col bg-white h-screen w-screen lg:overflow-x-hidden max-w-fit">
      <Sidebar />

      <div className="flex-1 ">
        <Header />
        <div className="pt-4">{<Outlet />}</div>
      </div>
    </div>
  );
}
