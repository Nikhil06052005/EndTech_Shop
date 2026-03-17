import React, { useState } from 'react'
import "./Shop.css"
import { category } from '../../Category';
import { FaShopify } from "react-icons/fa6";
import { dummydata } from '../../dummydata';
import Product from '../../Components/Product/Product';
function Shop() {
  let [cate, setCate] = useState(dummydata);
    function filterProducts(category) {
      if(category =="All Products"){
        setCate(dummydata);
      }
      else{
        const updatedata = dummydata.filter((item) => item.category === category);
      setCate(updatedata);
      }
      
    }
  return (
    <div className='shop'>
      <div className="heading">
        <span>Shop<FaShopify /></span>
      </div>
      <div className="category">
              {category.map((item) => {
                return (
                  <div className="category-card" onClick={()=>{
                    filterProducts(item.name)
                  }}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="product-section">
        {cate.map((item) => {
          return (
            <Product
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Shop
