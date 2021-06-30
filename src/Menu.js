import React,{useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import './Menu.css'
import Top from './Top'
import Header from './Header'
import gsap from 'gsap'
import converse from './images/converse.jpg'
import boss from './images/boss.jpg'
import calvin from './images/calvin.jpg'
import kayali from './images/kayali2.jpg'
import becca from './images/becca.jpg'
import drMartens from './images/drMartens.jpg'
import bybi from './images/bybi.jpg'
import benefit from './images/benefit2.jpg'


const brands = [
  {name:'Converse',image:converse,route:'/converse'},
  {name:'Dr Martens',image:drMartens,route:'/drMartens'},
  {name:'Benefit',image:benefit,route:'/benefit'},
  {name:'BOSS',image:boss,route:'/boss'},
  {name:'Calvin Klein',image:calvin,route:'/calvin'},
  {name:'BYBI',image:bybi,route:'/bybi'}
]


const Menu = ()=> {
  //vars for animation
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let shop1 = useRef(null);
  let shop2 = useRef(null);
  let shop3 = useRef(null);
  let info = useRef(null);

  useEffect(()=>{
    gsap.from([shop1,shop2,shop3],1,{
      
      delay:1,
      ease : "power3.out",
      y:95,
      stagger:{
        amount:0.1
      }
    });
    // gsap.to(menu,{
      
    //   duration:0,
    //   css:{display:"block"}

    // })
    gsap.to([revealMenuBackground,revealMenu],{
      duration:0,
      opacity:1,
      height:"200%"
    
      
    });
      staggerReveal(revealMenuBackground,revealMenu);
    
  },[revealMenuBackground,revealMenu,shop1,shop2,shop3])
  
const  staggerReveal = (node1,node2) =>{
    gsap.from([node1,node2],{
      
      duration:1.7,
      height:0,
      transformOrigin:"right top",
      skewY:5,
      ease:"power3.out",
      stagger:{
        amount:0.2
      }
    })
  }
  const handleBrand = brand=>{
    gsap.to(cityBackground,{
      duration:0,
      background:`url(${brand}) no-repeat fixed center`,
      
      
      
    });
    gsap.to(cityBackground,{
      duration:0.4,
      opacity:1,
      ease:"power3.out"
    });
    gsap.from(cityBackground,{
      duration:0.4,
      skewY:2,
      transformOrigin:"right top"
    });
  }
  const handleBrandReturn = () =>{
    gsap.to(cityBackground,{
      duration:0.4,
      opacity:0
    })
  }
  const handleHover = e=>{
    gsap.to(e.target,{
      duration: 0.3,
      y:3,
      skewX: 4,
      ease: "power3.out"
    })
  }
  const handleHoverExit = e=>{
    gsap.to(e.target,{
      duration: 0.3,
      y:-3,
      skewX: 0,
      ease: "power3.out"
    })
  }



  return (
    <div>
    <div ref={el=>(menu=el)} className="hamburger-menu">
    <Top/>
    <Header />
      <div ref={el=>(revealMenuBackground=el)} className="menu-secondary-b
      ackground-color">
        <div ref={el=>(revealMenu=el)} className="menu-layer">
          <div ref={el=>(cityBackground=el)}  className="menu-image-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav className="navi">
                  <ul className="uli">
                    <li className="lii">
                      <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/shop3"><a ref={el=>(shop1=el)} className="list">The Women Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link  onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/shop1"><a ref={el=>(shop2=el)} className="list">The Men Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/shop2"><a ref={el=>(shop3=el)} className="list">MakeUp</a></Link>
                    </li>
                    </ul>
                </nav>
                <div className="brands">
                  <span className="brands-title">
                  Shop By Brand :</span>
                  {brands.map(el=>(
                    <span onMouseEnter={()=>handleBrand(el.image)} ><Link to={el.route} className="bran" key={el.name} onMouseEnter={()=>handleBrand(el.image)} onMouseOut={handleBrandReturn}>{el.name}</Link></span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Menu
