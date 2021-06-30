import React,{useEffect,useState} from 'react'
import Header from './Header'
import axios from 'axios'

import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import pay from './images/payment.png'

import Product1 from './Product1';
import './Shop.css';
import Top from './Top';
import usePLoader2 from './usePLoader2';
function Whishlist() {
  const  [data,setData] = useState([]);
  const  [amount,setAmount] = useState();
  const [loader, showLoader, hideLoader] = usePLoader2()
  let total = 0
  
  useEffect(() => {
    getProducts();
    
    
    
    
  }, []);
  async function getProducts() {

   showLoader();
    
    let idd = localStorage.getItem("user_id")
    
    const result = await axios.get(`http://localhost:8000/api/get-wishlist-products/${idd}`);
    
    console.log(result.data)
    setData(result.data)
    // total = result.data?.reduce((amount,item)=> item.priceV +amount,0)
    // console.log(total)
    result.data.forEach(element => { total = total + element.price_value
      
    });
    console.log(total)
    setAmount(total)
    
    hideLoader();
  }
  return (
    <div className="all" >
        <Top />
      <Header />
      <section className="heroo heroWishlist" >
              {/* <div className="container">
                <h2 className="sub-headline1 "></h2> */}
                  
                  {/* <span className="first-letter1">C</span>aclvin Klein</h2>
                  <div className="headline11">The New Collection </div> */}
                  
                  {/* </div> */}
            </section>
      <div className="page">
      <div className="container">
        <div  className="products">
      {data.map(product=>(
        <Product1 key={product.id} id={product.id} title={product.name} image={product.img} price={product.price} priceV={product.price_value}/>
      ))}
</div></div></div>
      
{loader}
    </div>
  )
}

export default Whishlist
