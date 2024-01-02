import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
export default function Dashboard() {
  const [data] = useCart();
  return (
    <div className="flex max-w-6xl mx-auto ">
      <div className="w-64 min-h-full  bg-orange-400 ">
        <ul className=" text-slate-900 font-bold p-8 space-y-4 ">
          <li className="   flex  items-center gap-2 ">
            <FaShoppingCart />
            <NavLink to="/dashboard/cart">Cart ({data?.length})</NavLink>
          </li>
          <li className="  flex  items-center gap-2 ">
            <FaHome />
            <NavLink to="/dashboard/userHome">Home</NavLink>
          </li>
          <li className="  flex  items-center gap-2 ">
            <FaCalendar />
            <NavLink to="/dashboard/reservation">reservation</NavLink>
          </li>
          <li className="  flex  items-center gap-2 ">
            <FaAd />
            <NavLink to="/dashboard/review">Add review</NavLink>
          </li>
          <li className="  flex  items-center gap-2 ">
            <FaBook />
            <NavLink to="/dashboard/booking"> Booking</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
