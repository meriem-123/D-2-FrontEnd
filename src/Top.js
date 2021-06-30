import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import './HomePage.css';

function Top() {
  useEffect(() => {
    Aos.init({duration:3000})
    
  }, []);
  return (
    <div>
      <div className="top"><i className="fa fa-truck"></i><span className="animate-top-top">Free Shipping Worldwide On Your First Order  </span><span className="no-animate-top">Minimum 9 <i className="fa fa-dollar"></i></span> </div>
      
    </div>
  )
}

export default Top
