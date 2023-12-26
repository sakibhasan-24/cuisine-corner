import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/CommonPages/Footer";
import Header from "../Pages/CommonPages/Header";

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
