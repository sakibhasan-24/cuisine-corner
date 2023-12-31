import React, { useState } from "react";
import Cover from "../../components/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCart from "../Menu/menu/FoodCart";
import OrderTab from "./OrderTab";
export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menus] = useMenu();
  const deserts = menus.filter((menu) => menu.category === "dessert");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const salads = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  const offered = menus.filter((menu) => menu.category === "offered");
  return (
    <div className="max-w-6xl mx-auto">
      <Cover title={"order"} image={coverImg} />
      <div className="my-6 flex items-center justify-center gap-6">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza </Tab>
            <Tab>Desserts </Tab>
            <Tab>Offered</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={deserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
