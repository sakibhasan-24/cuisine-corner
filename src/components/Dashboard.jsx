import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUser,
  FaUtensilSpoon,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
export default function Dashboard() {
  const [isAdmin] = useAdmin();
  const [data] = useCart();
  return (
    <div className="flex max-w-6xl mx-auto ">
      <div className="w-64 min-h-full  bg-orange-400 ">
        <ul className=" text-slate-900 font-bold p-8 space-y-4 ">
          {isAdmin ? (
            <>
              <li className="   flex  items-center gap-2 ">
                <FaShoppingCart />
                <NavLink to="/dashboard/cart">Cart ({data?.length})</NavLink>
              </li>
              <li className="  flex  items-center gap-2 ">
                <FaHome />
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li className="  flex  items-center gap-2 ">
                <FaUtensilSpoon />
                <NavLink to="/dashboard/addItems">add items</NavLink>
              </li>
              <li className="  flex  items-center gap-2 ">
                <FaList />
                <NavLink to="/dashboard/manageItems">manage items</NavLink>
              </li>
              <li className="  flex  items-center gap-2 ">
                <FaBook />
                <NavLink to="/dashboard/booking">manage Booking</NavLink>
              </li>
              <li className="  flex  items-center gap-2 ">
                <FaUser />
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
