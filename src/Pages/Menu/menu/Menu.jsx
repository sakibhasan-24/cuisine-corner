import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const [menus] = useMenu();
  const deserts = menus.filter((menu) => menu.category === "dessert");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const salads = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const offered = menus.filter((menu) => menu.category === "offered");
  return (
    <div>
      <Helmet>
        <title>cuisine|Menu</title>
      </Helmet>
      <Cover image={menuImg} title={"Our Menu"} />
      <SectionTitle text={"Don't Miss"} title={"today's offer"} />
      {/*  */}
      <MenuCategory items={offered} />
      {/* pizzas */}
      <MenuCategory items={pizzas} title={"Pizzas"} img={pizzaImg} />
      <MenuCategory items={salads} title={"Salads"} img={saladImg} />
      <MenuCategory items={soup} title={"Soups"} img={soupImg} />
      <MenuCategory items={deserts} title={"Deserts"} img={desertImg} />
    </div>
  );
}
