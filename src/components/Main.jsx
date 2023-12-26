import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/CommonPages/Footer";

export default function Main() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
