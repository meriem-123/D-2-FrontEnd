import React from 'react'
import './HomePage.css';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import logo from './images/d2.png'

function Footer() {
  useEffect(() => {
    Aos.init({duration:3000})
    
  }, []);
  return (
    <div>
      <footer data-aos="slide-up"> 
              <div className="back-to-top">
                <a href="#hero"><i className="fa fa-chevron-up"></i></a>

              </div>
              <div className="footer-content">
                <div className="footer-content-about animate-up">
                  <h4 data-aos="fade-down">About  <b>D-2</b>  </h4>
                  
                  <p data-aos="fade-up">Aute tempor excepteur aute ex in voluptate elit veniam eiusmod. Nostrud ea esse anim culpa reprehenderit laboris proident. Aute adipisicing mollit id esse ex duis. Laborum non mollit do quis eu irure aute non.</p>
                </div>
                <div className="footer-content-divider animate-bottom">
                  <div className="social-media"><h4 data-aos="fade-down">Follow for more</h4>
                  <ul className="social-icons">
                    <li>
                      <a  href="#"><i data-aos="slide-right" className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i data-aos="slide-right" className="fa fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i data-aos="slide-right" className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i data-aos="slide-right" className="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                  </div>
                  <div className="newsletter-container">
                    <h4 data-aos="fade-down">Newsletter</h4>
                    <form data-aos="fade-left" action="" className="newsletter-form">
                  <input type="text" className="newsletter-input" placeholder="Your Email adress...."></input>
                  <button className="newsletter-btn" type="submit">
                    <i className="fa fa-envelope"></i>
                  </button>
                    </form>
                      
                  </div>

                </div>

              </div>

            </footer>
      
    </div>
  )
}

export default Footer
