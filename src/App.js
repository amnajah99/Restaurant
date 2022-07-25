import Header from "./Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  useEffect (()=> {
    getName();
  },[name]);

  const getName = async() => {
    const response = await axios.get("https://api.nationalize.io?name=nathaniel");
    setName(response.data.name);
  }

  return (
    <div>
      <Header />
      <p>
        {name}
      </p>
    </div>
  );
}
export default App;