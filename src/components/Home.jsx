import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Menus from "../Pages/PopularMenu/Menus";
import FeatureItem from "../Pages/FeaturedItem/FeatureItem";
import Reviews from "../Pages/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Menus />
      <FeatureItem />
      <Reviews />
    </div>
  );
}
