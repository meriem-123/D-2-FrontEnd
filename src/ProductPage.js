import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './ProductPage.css'
import Top from './Top'
import Header  from './Header'


function  ProductPage({ match }) {
  let params = match.params;
  const [productss,setProducts] =useState([]);

   useEffect(() => {
     getProducts();
   }, []);

   const getProducts = async () => {
     const response = await fetch("https://makeup.p.rapidapi.com/products.json?product_category=lipstick&id=1047&brand=colourpop", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f0d3eaf5a8mshd838917fecf0184p13e861jsnc237531769a0",
        "x-rapidapi-host": "makeup.p.rapidapi.com"
       }
     });
     const datas = await response.json();
     setProducts(datas[`${params.id}`]);
     console.log(datas[`${params.id}`]);
     

   
    
    
    
   }
  return (
    <div className="initial">
      <div className="fullscreen">
        <Top />
        <Header />
        <div className="productP">
          <div className="imgP">
            <img  className="imgPP" src={productss.image_link} />
            <div className="product-details">
              <div className="innerP">
                
                <div>
                  <span className="category">{productss.product_type}</span>
                </div>
                <h1>{productss.name}</h1>
                <p className="descP">{productss.description}</p>
                <div className="additonals">
                  
                  
                </div>
                <div className='qty-price'>
                <span className='price'>{productss.price}{productss.price_sign}</span>
                </div>
                <div  className='btn-row'>
              <button className='add-to-cart'> Add to cart</button>
              <button className='subscribe'> Add to Wishlist</button>
            </div>
            <Link to='/shop2'>
                  <a className="go-back">Back to Shop</a>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductPage
