import React from "react";
import { Outlet } from "react-router-dom";


export default function Authlayout() {
  return (
    <>
      <div className="bg-authbackground lg:h-screen overflow-hidden  ">
        <div className="flex flex-col  justify-between items-center gap-10 text-white w-screen px-12  lg:flex-row h-screen">
          <div className="w-full">
            <Outlet />
          </div>
       
        </div>
      </div>
    </>
  );
}
