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
        price: 700,
        amount: 0
      },
      {
        itemCode: '001',
        itemName: "Seekh Kebab",
        price: 850,
        amount: 0
      },
      {
        itemCode: '002',
        itemName: "Tikka",
        price: 550,
        amount: 0
      },
    ]
  },
  {
    name: 'BURGER',
    items: [
      {
        itemCode: '003',
        itemName: "Grilled Chicken",
        price: 700,
        amount: 0
      },
    ]
  },
  {
    name: 'CHINESE',
    items: [
      {
        itemCode: '004',
        itemName: "Dim Sums",
        price: 700,
        amount: 0
      },
      {
        itemCode: '005',
        itemName: "Fried Rice",
        price: 350,
        amount: 0
      },
      {
        itemCode: '006',
        itemName: "Special Rice",
        price: 350,
        amount: 0
      },
      {
        itemCode: '007',
        itemName: "Spring Rolls",
        price: 350,
        amount: 0
      },
      {
        itemCode: '008',
        itemName: "Quick Noodles",
        price: 500,
        amount: 0
      },
      {
        itemCode: '009',
        itemName: "Simple Chicken Soup",
        price: 700,
        amount: 0
      },
      {
        itemCode: '010',
        itemName: "Chestnuts",
        price: 500,
        amount: 0
      },
    ]
  },
  {
    name: 'DRINKS',
    items: [
      {
        itemCode: '011',
        itemName: "Soft Drink",
        price: 100,
        amount: 0
      },
      {
        itemCode: '012',
        itemName: "Margarita",
        price: 350,
        amount: 0
      },
      {
        itemCode: '013',
        itemName: "Ice Tea",
        price: 250,
        amount: 0
      },
      {
        itemCode: '014',
        itemName: "Lemonade",
        price: 200,
        amount: 0
      },
      {
        itemCode: '015',
        itemName: "Tea",
        price: 150,
        amount: 0
      },
    ]
  },
  {
    name: 'FRESH JUICE',
    items: [
      {
        itemCode: '016',
        itemName: "Orange",
        price: 300,
        amount: 0
      },
      {
        itemCode: '017',
        itemName: "Apple",
        price: 350,
        amount: 0
      },
      {
        itemCode: '018',
        itemName: "Mango",
        price: 350,
        amount: 0
      },
      {
        itemCode: '019',
        itemName: "Lychee",
        price: 350,
        amount: 0
      },
      {
        itemCode: '020',
        itemName: "GrapeFruit",
        price: 350,
        amount: 0
      },
      {
        itemCode: '021',
        itemName: "Grape",
        price: 350,
        amount: 0
      },
      {
        itemCode: '022',
        itemName: "Pomegranate",
        price: 350,
        amount: 0
      },
    ]
  },
  {
    name: 'ICE CREAM',
    items: [
      {
        itemCode: '023',
        itemName: "Chocolate",
        price: 200,
        amount: 0
      },
      {
        itemCode: '024',
        itemName: "Vanilla",
        price: 200,
        amount: 0
      },
      {
        itemCode: '025',
        itemName: "Strawberry",
        price: 200,
        amount: 0
      },
      {
        itemCode: '026',
        itemName: "Blueberry",
        price: 200,
        amount: 0
      },
      {
        itemCode: '027',
        itemName: "Mango",
        price: 200,
        amount: 0
      },
      {
        itemCode: '028',
        itemName: "Cotton Candy",
        price: 350,
        amount: 0
      },
    ]
  },
  {
    name: 'MEATY',
    items: [
      {
        itemCode: '029',
        itemName: "Steak",
        price: 800,
        amount: 0
      },
      {
        itemCode: '030',
        itemName: "Meatloaf",
        price: 700,
        amount: 0
      },
      {
        itemCode: '031',
        itemName: "Borscht",
        price: 850,
        amount: 0
      },
    ]
  },
  {
    name: 'PIZZA',
    items: [
      {
        itemCode: '032',
        itemName: "Supreme",
        price: 700,
        amount: 0
      },
      {
        itemCode: '033',
        itemName: "Veggie",
        price: 700,
        amount: 0
      },
      {
        itemCode: '034',
        itemName: "Fajita",
        price: 700,
        amount: 0
      },
    ]
  },
  {
    name: 'SALADS',
    items: [
      {
        itemCode: '035',
        itemName: "Caesar Salad",
        price: 300,
        amount: 0
      },
      {
        itemCode: '036',
        itemName: "Russian Salad",
        price: 350,
        amount: 0
      },
      {
        itemCode: '037',
        itemName: "Fresh Veggie Salad",
        price: 300,
        amount: 0
      },
    ]
  },
  {
    name: 'SEA FOOD',
    items: [
      {
        itemCode: '038',
        itemName: "Fried Prawns",
        price: 600,
        amount: 0
      },
      {
        itemCode: '039',
        itemName: "Lobster",
        price: 750,
        amount: 0
      },
      {
        itemCode: '040',
        itemName: "Oysters",
        price: 650,
        amount: 0
      },
    ]
  },
  {
    name: 'SOUPS',
    items: [
      {
        itemCode: '041',
        itemName: "Corn Soup",
        price: 400,
        amount: 0
      },
      {
        itemCode: '042',
        itemName: "Hot n Sour",
        price: 350,
        amount: 0
      },
      {
        itemCode: '043',
        itemName: "Thai Soup",
        price: 350,
        amount: 0
      },
    ]
  },
  {
    name: 'SWEETS',
    items: [
      {
        itemCode: '044',
        itemName: "Molten Lava",
        price: 400,
        amount: 0
      },
      {
        itemCode: '045',
        itemName: "Apple Pie",
        price: 350,
        amount: 0
      },
      {
        itemCode: '046',
        itemName: "Gulab Jamun",
        price: 350,
        amount: 0
      },
    ]
  },
  ]

  // console.log(menu_categories[0].items[0].amount)
  const [menuItems, setMenuItems] = useState(menu_categories[0].items);
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false)


  //recieves items from CATEGORY and sets them in menuItems array
  const showMenu = (name, items) => {
    setMenuItems(items);
  }

  //receieves itemcode of deleted item from CARTITEM and filters it from the cartItems array
  const removeFromCart = (itemCode) => {
    setCartItems(cartItems.filter((i) => i.itemCode != itemCode))
  }

  //when add to cart is clicked, item should be added to cartItems array
  const showCartItems = (cItem) => {
    setIsCartEmpty(false)
    if (cartItems.includes(cItem)) {
      return
    }
    else {
      setCartItems(current => [...current, cItem])
    }
  }

  // show 1x 2x on each menu card when count changes in cartitem
  const getCartItemAmount = (code, itemAmount) => {
    const menuIndex = menuItems.findIndex((i) => i.itemCode == code)
    const tempMenuArr = [...menuItems]
    tempMenuArr[menuIndex].amount = itemAmount
    setMenuItems(tempMenuArr)
  }

  //empty cart items and hide menu card count
  const emptyCart = () => {
    setIsCartEmpty(true)
    setCartItems([])
  }

  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Category
          menu_categories={menu_categories}
          showMenu={showMenu}
        />
        <Menu
          items={menuItems}
          showCartItems={showCartItems}
          isCartEmpty={isCartEmpty}
        />
        <Cart
          cartItemsArr={cartItems}
          removeFromCart={removeFromCart}
          getCartItemAmount={getCartItemAmount}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
}
export default App;