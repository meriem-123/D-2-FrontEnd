import React from 'react'
import Header from './Header';
import img1 from './images/sale.gif'
import img2 from './images/IMG-2412.JPG'
import grp1 from './images/1.jpg'
import grp2 from './images/2.jpg'
import grp3 from './images/3.jpg'
import grp4 from './images/4.JPG'
import grp5 from './images/IMG-2410.JPG'
import grp6 from './images/IMG-2409.JPG'
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import './HomePage.css';
import Footer from './Footer';
import Top from './Top';

function HomePage() {
  useEffect(() => {
    Aos.init({duration:3000})
    
  }, []);
  return (
    <div>
      <Top/>
      <Header />
            <section className="hero" id="hero">
              <div className="container">
                <h2 className="sub-headline subsubH subsubHH ">
                  
                  <span className="ffirst-letter">a</span>Dynamite</h2>
                  <div className="headline1">Winter Collection </div>
                  <div className="headline-description">
                    <div className="separator">
                      <div className="Line line-left"></div>
                      
                      <div className="Line line-right"></div>
                      
                    </div>
                    <div className="single-animation">
                      <h6>Update Your Style With Our New Special Collection</h6>
                      <a href="#" className="btn cta-btn">Check It Out </a>
                    </div>

                  </div>
                  </div>
            </section>
            <section className="discover">
              <div className="container">
                <div className="web-info">
                <div className="web-info-img animate-right">
                    <img data-aos="slide-right" src={img1} alt="" />
                    
                  </div>
                  <div className="web-description  animate-left">
                    <div className="global-headline">
                      <h2 className="sub-headline">
                        <span className="first-letter">D</span>iscover
                      </h2>
                      <h1 className="headline headline-dark">Our Sales</h1>
                      
                    </div>
                    <p data-aos="fade-down">Ea aliquip aliquip nisi officia non Lorem ea fugiat proident et quis nostrud velit reprehenderit.  </p>
                    <a data-aos="fade-up" href="#" className="btn body-btn">Place Your Order Now</a>
                  </div>
                  <div className="web-info-img animate-right">
                    <img data-aos="slide-left" src={img1} alt="" />
                    
                  </div>
                </div>
              </div>

            </section>
            {/* //discover ends  */}
            <section  className="part3 between">
              <div className="container">
              <div className="global-headline">
                <div className="animate"><h2 className="sub-headline subsubH">
                        <span className="first-letter">T</span >he Women
                      </h2></div>
                      <div className="animate-bottom"></div>
                      
                      <h1 className="headline headline-ligh">Collection</h1>
                      
                    </div>

              </div>
            </section>
          {/* //part3 ends here */}
          <section className="part4">
            <div className="container">
              <div className="web-info">
                <div className="image-group padding-right animate-left">
                <img data-aos="flip-right" src={grp1} alt="" />
                <img data-aos="flip-down" src={grp2} alt="" />
                <img data-aos="flip-left" src={grp3} alt="" />
                <img data-aos="flip-up" src={grp4} alt="" />

                </div>
                <div className="web-description animate-right">
                <div className="global-headline">
                      <h2 className="sub-headline">
                        <span className="first-letter">C</span>hoice
                      </h2>
                      <h1 className="headline headline-dark">Diversity</h1>
                      
                    </div>
                    <p data-aos="fade-down">Ea aliquip aliquip nisi officia non Lorem ea fugiat proident et quis nostrud velit reprehenderit. Minim cupidatat voluptate officia do anim ut laborum dolore. Culpa proident culpa ipsum anim velit minim irure non id pariatur sint culpa. </p>
                    <a data-aos="fade-up" href="#" className="btn body-btn">Check It Out</a>

                </div>
          </div>

            </div>
          </section>
           
          {/* section 4 ends here */}
          <section  className="part5 between">
              <div className="container">
              <div className="global-headline">
                <div className="animate"><h2 className="sub-headline subsubH">
                        <span className="first-letter">O</span>ur Makeup
                      </h2></div>
                      <div className="animate-bottom"></div>
                      
                      <h1 className="headline headline-light">Selection</h1>
                      
                    </div>

              </div>
            </section>
            {/* prt5 ends here */}
            <section className="part6">
              <div className="container">
                <div className="web-info">
                  <div className="web-description padding-right animate-left">
                    <div className="global-headline">
                      <h2 className="sub-headline">
                        <span className="first-letter">U</span>pdate
                      </h2>
                      <h1 className="headline headline-dark">Your Style</h1>
                      
                    </div>
                    <p data-aos="fade-down">Ea aliquip aliquip nisi officia non Lorem ea fugiat proident et quis nostrud velit reprehenderit. Minim cupidatat voluptate officia do anim ut laborum dolore. Culpa proident culpa ipsum anim velit minim irure non id pariatur sint culpa. </p>
                    <a data-aos="fade-up" href="#" className="btn body-btn">Assembele your Style</a>
                  </div>
                  <div className="image-group ">
                    <img data-aos="slide-up" className="animate-top"src={grp5} alt="" />
                    <img data-aos="slide-left" className="animate-top"src={grp6} alt="" />
                    
                  </div>
                </div>
              </div>

            </section>
            <Footer />
      
    </div>
  )
}

export default HomePage
