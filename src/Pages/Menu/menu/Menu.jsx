import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import Menus from "../../PopularMenu/Menus";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>cuisine|Menu</title>
      </Helmet>
      <Cover image={menuImg} title={"Our Menu"} />
      <Menus />
      <Cover image={menuImg} title={"Our Menu"} />
      <Menus />
    </div>
  );
}
