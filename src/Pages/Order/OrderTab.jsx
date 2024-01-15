import React from "react";
import FoodCart from "../Menu/menu/FoodCart";

export default function OrderTab({ items }) {
  // console.log(items);
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((items) => (
        <FoodCart key={items._id} items={items} />
      ))}
    </div>
  );
}
