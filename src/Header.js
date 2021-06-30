import React, { Component } from 'react'
import './Header.css'
import logo from './images/d2.png'
import {NavLink} from 'react-router-dom'
import NavDropDown from 'react-bootstrap/NavDropdown'
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    isBoxVisible:false
  };
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  
  logOut = () => {
      localStorage.clear();
      this.props.history.push("/homepage");
  };
  
  render() {
    const { isBoxVisible } = this.state;

    let user = JSON.parse(localStorage.getItem("user-info"))


    return (
      <div className={`box ${isBoxVisible ? "open" : "hidden"}`}>
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle" onClick={this.toggleBox}>
            <i className="fa fa-bars"></i>
            <i className="fa fa-times"></i>
          </div>
          <a  className="logo"><NavLink to="/"><img src={logo}/></NavLink></a>
          
          <ul className="nav-list">
           {/* <li className="nav-item">
             
              <input type="text" className="search-input" placeholder="Search...."></input>
              <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
            </li> */}
          {/* <li className="nav-item">
          
                  <input type="text" className="search-input" placeholder="Search...."></input>
                  <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                    
            </li> */}
          {
            localStorage.getItem('user-info') ?
            <>
              
            <li className="nav-item dropdown"><NavLink to="/shop" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}>
              Our Shop</NavLink>
            </li>
            <li className="nav-item">
            <li className="nav-item">
            <NavLink to="/wishlist" className="nav-link"><i className="fa fa-heart"> </i></NavLink>
            </li>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link"><i className="fa fa-shopping-cart"> </i></NavLink>
            </li>
            <li>
              <NavDropDown title={user && user.name}>
                <NavDropDown.Item id="logout" onClick={this.logOut}>Logout</NavDropDown.Item>
              </NavDropDown>
            </li>
            </>
            :
            <>
              
            <li className="nav-item dropdown"><NavLink to="/shop" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Our Shop</NavLink>
              
            </li>

            
            
            <li className="nav-item">
              <a href="#" className="nav-link"><NavLink to="/wishlist" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}><i className="fa fa-heart"> </i></NavLink></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><NavLink to="/cart" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}><i className="fa fa-shopping-cart"> </i></NavLink></a>
            </li>
            <li className="nav-item"><NavLink to="/login" exact className="nav-link" >
            Login</NavLink>
            </li>
            </>
          }       
          </ul>
          </nav>
          
      </div>
      </div>
      {/* <div className={`box ${isMenuVisible ? "menu" : "hidden"}`}>
        <div className="menu-layer">
          <div className="menu-image-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav className="navi">
                  <ul className="uli">
                    <li className="lii">
                      <Link to="/shop"><a className="list">The Women Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link to="/shop1"><a className="list">The Men Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link to="/shop2"><a className="list">MakeUp</a></Link>
                    </li>
                    </ul>
                </nav>
              </div>
            </div>
          </div>
        </div> 
      </div>*/}
      </div>
    )
  }
}

export default withRouter(Header);