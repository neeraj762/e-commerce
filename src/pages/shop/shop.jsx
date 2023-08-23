import React from "react";
import { useState } from "react";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({Items}) => { 
  
  const [sortType, setSortType ] = useState('priceAsc');


  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Me-Shop</h1>
      </div>
<div className="filter">
<select onChange={e => setSortType(e.target.value)} defaultValue='priceAsc'> 
            <option value="priceAsc"> Price Low - High</option>
            <option value="priceDsc">Price High - Low</option>
            <option value="ratingsDsc">Relevant</option>
        </select>
</div>
     

     
<div className="products"> 
        {Items.sort((a, b) => 
                sortType === 'priceAsc' ?  a.price - b.price : 
                sortType === 'priceDsc' ?   b.price - a.price : 
                sortType === 'ratingsDsc' ?  b.ratings - a.ratings : null
            ).map((product)=>(
              <Product data={product}/>
            ))}
               
    </div>

    </div>
  );
};