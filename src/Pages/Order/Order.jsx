import React, { useState } from "react";
import Cover from "../../components/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
export default function Order() {
  const data = ["salad", "soups", "pizzas", "desserts", "Offered"];
  const { category } = useParams();
  // console.log(category);
  const initialIndex = data.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

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
            <Tab>salads</Tab>
            <Tab>soup</Tab>
            <Tab>pizzas </Tab>
            <Tab>deserts </Tab>
            <Tab>offered</Tab>
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
