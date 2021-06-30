import React,{useEffect,useState} from 'react'
import Header from './Header'
import axios from 'axios'
import './Cart.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import pay from './images/payment.png'
import usePLoader2 from './usePLoader2';

function Cart() {
  const [image,setImage] =useState([]);
  const [name,setName] =useState([]);
  const [price,setPrice] =useState([]);
  const  [data,setData] = useState([]);
  const  [amount,setAmount] = useState();
  const [loader, showLoader, hideLoader] = usePLoader2()
  let total = 0
  
  useEffect(() => {
    getProducts();
    
    
    
    
  }, []);
  
  
  async function getProducts() {
   
    
    let idd = localStorage.getItem("user_id")
    showLoader();
    const result = await axios.get(`http://localhost:8000/api/get-cart-products/${idd}`);
    
    console.log(result.data)
    setData(result.data)
    // total = result.data?.reduce((amount,item)=> item.priceV +amount,0)
    // console.log(total)
    result.data.forEach(element => { total = total + element.price_value
      
    });
    console.log(total)
    setAmount(total)
    hideLoader()
    
    
  }
  return (
    <div><a className="back" href="/homePage"><i class="fa fa-arrow-left"></i>Continue Shopping</a>
    <div className="checkout">
      
      <div className="checkout-left">
        
      <img className="checkout-ad" src="https://allforarmy.com/wp-content/uploads/2021/03/bts-fila-2021-project-7.jpg"/> 
      {data?.length === 0 ?(
        <div>
          <h2>Your Shopping Basket is Empty &#128533; </h2>
          <p>Life is soo boring if you don't have an Online Order to look forward to...So come on spend a little...</p></div>
      ):(
        <div>
          <h2 className="shopping-cart">Your Shopping Cart </h2>
          {
            data?.map(item=>(
              <CheckoutProduct 
              product_id={item.id}
              title={item.name}
              image={item.img}
              price={item.price}
              
              /> //map throught the basket and for every item get me this 
            ))
          }
          </div>
      )}
      
      </div>
      {data.length> 0 &&(<div className="checkout-right">
        <Subtotal basket={data} value={amount}/>
        <div className="payment">
          <h3>We accept </h3>
          <img src={pay} className="pay"></img>
        </div>

      </div>
      )}
      
    </div>
    {loader}
    </div>
  )
}

export default Cart
