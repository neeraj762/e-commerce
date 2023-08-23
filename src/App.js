import {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar"
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider} from "./context/shop-context";
import Contact from "./pages/shop/contact";
import { PRODUCTS } from "./products";

function App() {
 const [query,setQuery] = useState("");
  function search(data){
    return (PRODUCTS.filter((item)=>item.productName.toLowerCase().includes(query)));
  }


  
 
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar 
          setQuery={setQuery}
           />
          <Routes>
            <Route path="/" element={<Shop Items = {search(PRODUCTS)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;