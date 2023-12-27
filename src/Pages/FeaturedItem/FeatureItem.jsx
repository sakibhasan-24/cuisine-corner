import React from "react";
import image from "../../../src/assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle";
import "./FeaturedItem.css";
export default function FeatureItem() {
  return (
    <div className="max-w-6xl bg-fixed  mx-auto p-4 featured-items">
      <SectionTitle title="Featured Items" text="check It Now" />
      <div className="flex items-center bg-fixed justify-center gap-6">
        <div>
          <img className="" src={image} alt="image" />
        </div>
        <div className="space-y-4 md:ml-20">
          <p className="font-semibold"> March 20, 2023</p>
          <p className=" text-slate-900">
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-4 border-gray-600 rounded-lg py-3 hover:border-white hover:text-xs transition-all duration-500 ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
