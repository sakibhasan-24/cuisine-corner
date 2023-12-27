import React from "react";

export default function MenuItem({ item }) {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex items-center  space-x-2 md:space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        className="w-[120px]"
        alt="image"
      />
      <div className="space-y-2">
        <h3 className="uppercase font-semibold text-yellow-500">
          {name}-----------------
        </h3>
        <p className="text-xs text-slate-400">{recipe}</p>
      </div>
      <p>${price}</p>
    </div>
  );
}
