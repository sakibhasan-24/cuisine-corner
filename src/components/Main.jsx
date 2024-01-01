import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/CommonPages/Footer";
import Header from "../Pages/CommonPages/Header";

export default function Main() {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname.includes("/login");
  // console.log(hideHeaderAndFooter);
  return (
    <div>
      {!hideHeaderAndFooter && <Header />}
      <Outlet />
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}
