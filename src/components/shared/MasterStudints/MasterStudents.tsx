import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MasterStudents() {
  return (
    <>
      <div className="flex gap-3 ">
        <Sidebar />
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}
