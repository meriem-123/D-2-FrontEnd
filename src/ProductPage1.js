import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

import './ProductPage.css'
import Top from './Top'
import Header  from './Header'
import usePLoader2 from './usePLoader2';


function  ProductPage1({ match }) {
  let params = match.params;
  let history = useHistory();
  const [productss,setProducts] =useState([]);
  const [image,setImage] =useState([]);
  const [name,setName] =useState([]);
  const [price,setPrice] =useState([]);
  const [priceV,setPriceV] =useState([]);
  
  const [user_id,setUserId] =useState([]);
  const [category,setCategory] =useState([]);
  const [isLoading,setLoading]= useState(false);
  const [isLoading1,setLoading1]= useState(false);
  const [loader, showLoader, hideLoader] = usePLoader2()

  

   useEffect(() => {
     getProducts();
   }, []);
   
    async function addToCart() {
      
      let user_id = localStorage.getItem("user_id")
     let item = {
       name,image,price,priceV,user_id
     }
     console.log(item)
     setLoading(true);
     let result = await fetch("http://localhost:8000/api/addProductToCart", {
       method: 'POST',
       body: JSON.stringify(item),
       headers: {
         "Content-Type": 'application/json',
         "Accept": '*/*'
       }
     })
     result = await result.json()
     
     setLoading(false)
     
   }
   async function addToWishlist() {
    let user_id = localStorage.getItem("user_id")
   let item = {
     name,image,price,priceV,user_id
   }
   setLoading1(true);
  
   let result = await fetch("http://localhost:8000/api/addProductToWishlist", {
     method: 'POST',
     body: JSON.stringify(item),
     headers: {
       "Content-Type": 'application/json',
       "Accept": '*/*'
     }
   })
   result = await result.json()
   console.log("wishlist"+result)
   setLoading1(false)
   
 }
  
   const getProducts = async () => {
     showLoader();
     const response = await fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${params.id}&lang=en-US&store=US&sizeSchema=US&currency=USD`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f0d3eaf5a8mshd838917fecf0184p13e861jsnc237531769a0",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
       }
     });

     const datas = await response.json();
     setProducts(datas);
     const images = `http://${datas.media.images[0].url}`;
     setImage(images);
     setName(datas.name);
     setPrice(datas.price.current.text);
     setPriceV(datas.price.current.value)
     setCategory(datas.productType.name);
     
     hideLoader();
   
    

   }
   
  
  
    
  
  return (
    
    <div className="initial">
      <div className="fullscreen">
        <Top />
        <Header />
        <div className="productP">
          <div className="imgP">
            <img  className="imgPP" src={image} value={image}
          onChange = {(e)=>setName(e.target.value)}/>
            <div className="product-details">
              <div className="innerP">
              
                <div>
                  <span className="category">{category}</span>
                </div>
                <h1>{name}</h1>
                
                <div className="additonals">
                  
                  
                </div>
                <div className='qty-price'>
                <span className='price'>{price}</span>
                </div>
                <div  className='btn-row'>
                  <p>
              {!isLoading && (<button className='add-to-cart' onClick={addToCart}> Add to cart</button>)}
              {isLoading && (<button className='add-to-cart' disabled><i className="fa fa-spinner fa-spin"></i> Adding to cart...</button>)}</p>
              <p>
              {!isLoading1 && (<button className='subscribe' onClick={addToWishlist}> Add to Wishlist</button>)}
              {isLoading1 && (<button className='subscribe' disabled><i className="fa fa-spinner fa-spin"></i> Adding to Wishlist...</button>)}
              </p>
            </div>
            
            
                  <a className="go-back" onClick={history.goBack}>Back to Shop</a>
                
              </div>

            </div>
          </div>
        </div>
      </div>
{loader}
    </div>
  );
}

export default ProductPage1
