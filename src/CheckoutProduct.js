import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./CheckoutProduct.css"
import remove from './images/trash.png'
import {Link,NavLink,useHistory} from "react-router-dom"


function CheckoutProduct({product_id,title,image,price}) {
  const  [data,setData] = useState([]);
  const history = useHistory()
  
  async function removeFromBasket() {
    let user_id = localStorage.getItem("user_id")

    let item = {
      product_id, 
      user_id
    }
    let result = await fetch("http://localhost:8000/api/delete-product-from-cart", {
      method: "DELETE",
      headers:{
        "content-type":"application/json",
        "Accept":"/"
      },
      body:JSON.stringify(item)
      
    });
    result = await result.json();
    console.log(result);
    
    
    
  }
  function refresh(){
    window.location.reload()

  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          
          <strong>{price}</strong>

        </p>
        
        
      </div>
     <img src={remove}  className="btnnn" onClick={removeFromBasket} />
      
      
    </div>
  )
}

export default CheckoutProduct
