import React, { useEffect, useState } from 'react'
import Header from './Header';
import Product from './Product';
import './Shop.css';
import Top from './Top';



function ShopMakeup() {
  // const tops_id = "205900902";
  // const pants_id = "205874801";
  // const dresses_id = "200003482";
  // const skirts_id = "205876601";
  // const bags_id = "200010063";
  // const shoes_id = "100001606";
  
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
     setProducts(datas);
     console.log(datas[0]);
     

   
    
    
    
   }

  return (
    <div className="all" >
      <Top />
      <Header />
      <section className="heroo hero3" >
              <div className="container">
                <h2 className="sub-headline1 ">
                  
                  <span className="first-letter1">O</span>ur Makeup</h2>
                  <div className="headline11">Selection</div>
                  
                  </div>
            </section>
      <div className="page">
      <div className="container">
        <div  className="products">
      {productss.map((product,index)=>(
        <Product key={product.name} count={index} title={product.name} image={product.image_link} price={product.price} priceV={product.price.current.value}/>
      ))}
</div></div></div>
      

    </div>
  )
}

export default ShopMakeup
