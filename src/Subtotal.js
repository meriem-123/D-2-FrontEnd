import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"



function Subtotal({basket,value}) {
  
  return (
    <div className="subtotal">
      
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p className="subtotal-info">
          Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
        </p>
        {/* <small className="subtotal-gift">
          <input type="checkbox" />This order contains a gift 
        </small> */}
        
        </>
      )}
      decimalScale={2}
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <button>Proceed to Checkout</button>
      <p className="under-info">Apply a Coupon Code, D-2 Points on the next step.</p>
      
    </div>
  )
}

export default Subtotal
