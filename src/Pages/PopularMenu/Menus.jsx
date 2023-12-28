import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../Hooks/useMenu";

export default function Menus() {
  //   const [menus, setMenus] = useState([]);
  const [menus] = useMenu();
  const popularMenus = menus.filter((menu) => menu.category === "popular");
  //   useEffect(() => {
  //     fetch("menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const items = data.filter((item) => item.category === "popular");
  //         setMenus(items);
  //       });
  //   }, []);
  return (
    <section>
      <SectionTitle title="From Our Menu" text="Popular Items" />
      <div className="my-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {popularMenus.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
