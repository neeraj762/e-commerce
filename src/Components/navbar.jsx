import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";



function Navbar({setQuery}){
 
    return(
            <>
      <div className="navbar">
      <input type="text" placeholder="Search..." className="search"
        onChange={e=>setQuery((e.target.value).toLowerCase())} >
        </input>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
            <ShoppingCart size={32}/>
            </Link>
        </div>
      </div>
            </>
        )
    
}

export default Navbar;