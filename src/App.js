import Header from "./Components/Header";
import Category from "./Components/Category";
import Menu from "./Components/Menu";

import './App.css'
import { useEffect, useState } from "react";

const App = () => {

  const menu_categories = [{
    name: 'BBQ',
    items: [
      {
        itemName: "Brisket",
        price: 700
      },
      {
        itemName: "Seekh Kebab",
        price: 850
      },
      {
        itemName: "Tikka",
        price: 550
      },
    ]
  },
  {
    name: 'BURGER',
    items: [
      {
        itemName: "Grilled Chicken",
        price: 700
      },
    ]
  },
  {
    name: 'CHINESE',
    items: [
      {
        itemName: "Dim Sums",
        price: 700
      },
      {
        itemName: "Fried Rice",
        price: 350
      },
      {
        itemName: "Special Rice",
        price: 350
      },
      {
        itemName: "Spring Rolls",
        price: 350
      },
      {
        itemName: "Quick Noodles",
        price: 500
      },
      {
        itemName: "Simple Chicken Soup",
        price: 700
      },
      {
        itemName: "Chestnuts",
        price: 500
      },
    ]
  },
    // {
    //   name: 'DRINKS',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'FRESH JUICE',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'ICE CREAM',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'MEATY',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'PIZZA',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'SALADS',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'SEA FOOD',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'SOUPS',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
    // {
    //   name: 'SWEETS',
    //   items: [
    //     {
    //       itemName: "Dim Sums",
    //       price: 700
    //     },
    //     {
    //       itemName: "Fried Rice",
    //       price: 350
    //     },
    //     {
    //       itemName: "Special Rice",
    //       price: 350
    //     },
    //   ]
    // },
  ]

  // // console.log(menu_categories[0].items[0].itemName);
  // var filteredCatItems = menu_categories.filter(cat => cat.name.includes('CHINESE')).map((c) => c.items)
  // console.log(filteredCatItems.length)
  // var items = filteredCatItems.map((i)=>i.itemName)
  // console.log(items)

  const [menuItems, setMenuItems] = useState(menu_categories[0].items);

  const showMenu = (name, items) => {
    // console.log(items);
    setMenuItems(items);
  }

  return (
    <div className="app">
      <Header />
      <Category menu_categories={menu_categories} showMenu={showMenu} />
      <Menu items={menuItems} />
    </div>
  );
}
export default App;