import React, { useEffect, useState } from 'react'
import Header from './Header';
import Product from './Product';
import './Shop.css';
import Top from './Top';
import usePLoader1 from './usePLoader1';
import Footer from './Footer'



function BenefitShop() {
  // const tops_id = "205900902";
  // const pants_id = "205874801";
  // const dresses_id = "200003482";
  // const skirts_id = "205876601";
  // const bags_id = "200010063";
  // const shoes_id = "100001606";
  const [loader, showLoader, hideLoader] = usePLoader1()
  const [productss,setProducts] =useState([]);

   useEffect(() => {
     getProducts();
   }, []);

   const getProducts = async () => {
     showLoader();
     const response = await fetch("https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=26273&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US", {
       "method": "GET",
       "headers": {
         "x-rapidapi-key": "f0d3eaf5a8mshd838917fecf0184p13e861jsnc237531769a0",
         "x-rapidapi-host": "asos2.p.rapidapi.com"
       }
     });
     const datas = await response.json();
     setProducts(datas.products);
    
    hideLoader();
    
   }

  return (
    <div className="all" >
      <Top />
      <Header />
      <section className="heroo heroBenefit" >
              <div className="container">
                <h2 className="sub-headline1 ">
                  
                  <span className="first-letter1">B</span>enefit</h2>
                  <div className="headline11">The New Collection</div>
                  
                  </div>
            </section>
      <div className="page">
      <div className="container">
        <div  className="products">
      {productss.map(product=>(
        <Product key={product.id} id={product.id} title={product.name} image={product.imageUrl} price={product.price.current.text} priceV={product.price.current.value}/>
      ))}
</div></div></div>
      
{loader}
<Footer />
    </div>
  )
}

export default BenefitShop
