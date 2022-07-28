import Header from "./Components/Header";
import Category from "./Components/Category";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import './App.css'
import { useEffect, useState } from "react";

const App = () => {

  const menu_categories = [{
    name: 'BBQ',
    items: [
      {
        itemCode: '000',
        itemName: "Brisket",
        price: 700
      },
      {
        itemCode: '001',
        itemName: "Seekh Kebab",
        price: 850
      },
      {
        itemCode: '002',
        itemName: "Tikka",
        price: 550
      },
    ]
  },
  {
    name: 'BURGER',
    items: [
      {
        itemCode: '003',
        itemName: "Grilled Chicken",
        price: 700
      },
    ]
  },
  {
    name: 'CHINESE',
    items: [
      {
        itemCode: '004',
        itemName: "Dim Sums",
        price: 700
      },
      {
        itemCode: '005',
        itemName: "Fried Rice",
        price: 350
      },
      {
        itemCode: '006',
        itemName: "Special Rice",
        price: 350
      },
      {
        itemCode: '007',
        itemName: "Spring Rolls",
        price: 350
      },
      {
        itemCode: '008',
        itemName: "Quick Noodles",
        price: 500
      },
      {
        itemCode: '009',
        itemName: "Simple Chicken Soup",
        price: 700
      },
      {
        itemCode: '010',
        itemName: "Chestnuts",
        price: 500
      },
    ]
  },
    {
      name: 'DRINKS',
      items: [
        {
          itemCode:'011',
          itemName: "Soft Drink",
          price: 100
        },
        {
          itemCode:'012',
          itemName: "Margarita",
          price: 350
        },
        {
          itemCode:'013',
          itemName: "Ice Tea",
          price: 250
        },
        {
          itemCode:'014',
          itemName: "Lemonade",
          price: 200
        },
        {
          itemCode:'015',
          itemName: "Tea",
          price: 150
        },
      ]
    },
    {
      name: 'FRESH JUICE',
      items: [
        {
          itemCode: '016',
          itemName: "Orange",
          price: 300
        },
        {
          itemCode: '017',
          itemName: "Apple",
          price: 350
        },
        {
          itemCode: '018',
          itemName: "Mango",
          price: 350
        },
        {
          itemCode: '019',
          itemName: "Lychee",
          price: 350
        },
        {
          itemCode: '020',
          itemName: "GrapeFruit",
          price: 350
        },
        {
          itemCode: '021',
          itemName: "Grape",
          price: 350
        },
        {
          itemCode: '022',
          itemName: "Pomegranate",
          price: 350
        },
      ]
    },
    {
      name: 'ICE CREAM',
      items: [
        {
          itemCode: '023',
          itemName: "Chocolate",
          price: 200
        },
        {
          itemCode: '024',
          itemName: "Vanilla",
          price: 200
        },
        {
          itemCode: '025',
          itemName: "Strawberry",
          price: 200
        },
        {
          itemCode: '026',
          itemName: "Blueberry",
          price: 200
        },
        {
          itemCode: '027',
          itemName: "Mango",
          price: 200
        },
        {
          itemCode: '028',
          itemName: "Cotton Candy",
          price: 350
        },
      ]
    },
    {
      name: 'MEATY',
      items: [
        {
          itemCode: '029',
          itemName: "Steak",
          price: 800
        },
        {
          itemCode: '030',
          itemName: "Meatloaf",
          price: 700
        },
        {
          itemCode: '031',
          itemName: "Borscht",
          price: 850
        },
      ]
    },
    {
      name: 'PIZZA',
      items: [
        {
          itemCode: '032',
          itemName: "Supreme",
          price: 700
        },
        {
          itemCode: '033',
          itemName: "Veggie",
          price: 700
        },
        {
          itemCode: '034',
          itemName: "Fajita",
          price: 700
        },
      ]
    },
    {
      name: 'SALADS',
      items: [
        {
          itemName: "Caesar Salad",
          price: 300
        },
        {
          itemName: "Russian Salad",
          price: 350
        },
        {
          itemName: "Fresh Veggie Salad",
          price: 300
        },
      ]
    },
    {
      name: 'SEA FOOD',
      items: [
        {
          itemName: "Fried Prawns",
          price: 600
        },
        {
          itemName: "Lobster",
          price: 750
        },
        {
          itemName: "Oysters",
          price: 650
        },
      ]
    },
    {
      name: 'SOUPS',
      items: [
        {
          itemName: "Corn Soup",
          price: 400
        },
        {
          itemName: "Hot n Sour",
          price: 350
        },
        {
          itemName: "Thai Soup",
          price: 350
        },
      ]
    },
    {
      name: 'SWEETS',
      items: [
        {
          itemName: "Molten Lava",
          price: 400
        },
        {
          itemName: "Apple Pie",
          price: 350
        },
        {
          itemName: "Gulab Jamun",
          price: 350
        },
      ]
    },
  ]

  const [menuItems, setMenuItems] = useState(menu_categories[0].items);
  const [cartItems, setCartItems] = useState([]);

  const showMenu = (name, items) => {
    setMenuItems(items);
  }

  const removeFromCart = (itemCode) => {
    setCartItems(cartItems.filter((i)=>i.itemCode != itemCode))
  }

  const showCartItems = (cItem) => {
    if(cartItems.includes(cItem)) {
      return
    }
    else{
      setCartItems(current => [...current, cItem])
    }  
  }

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Category menu_categories={menu_categories} showMenu={showMenu} />
        <Menu 
          items={menuItems} 
          showCartItems={showCartItems} 
        />
        <Cart cartItemsArr={cartItems} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}
export default App;