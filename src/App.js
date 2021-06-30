
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



import HomePage from './HomePage';
import ShopWomen from './ShopWomen';
import ShopMen from './ShopMen';
import ShopMakeup from './ShopMakeup';
import Menu from './Menu';
import Header from './Header';
import Top from './Top'; 

import Login from './Login'
import SignUp from './SignUp';

import ProductPage from './ProductPage'
import Cart from './Cart'
import ProductPage1 from './ProductPage1';
import ConverseShop from './ConverseShop';
import DrMartensShop from './DrMartensShop';
import BossShop from './BossShop';
import CalvinShop from './CalvinShop';
import BybiShop from './BybiShop';
import BenefitShop from './BenefitShop';
import Whishlist from './Whishlist';


function App() {
  return (
    <div className="app">
  

      <Router>
        
        <Switch>
        <Route path="/Shop">
            <Menu/>
            
          </Route>
          <Route path="/productPage/:id" component={ProductPage1} />
          <Route path="/login">
            <Login/>
            
          </Route>
          
          <Route path="/wishlist">
            <Whishlist />
          </Route>

          <Route path="/signIn" >
            <SignUp/>
            
          </Route>
          <Route path="/cart" >
            <Cart/>
            
          </Route>
          
          <Route path="/shop1">
            <ShopMen/>
          </Route>
          <Route path="/shop2">
          <ShopMakeup/>
          </Route>
          <Route path="/shop3">
          <ShopWomen />
          </Route>
          <Route path="/converse">
          <ConverseShop/>
          </Route>
          <Route path="/drMartens">
          <DrMartensShop/>
          </Route>

          <Route path="/boss">
          <BossShop/> 
          </Route> 
          <Route path="/calvin">
          <CalvinShop/> 
          </Route>
          <Route path="/bybi">
          <BybiShop/>
          </Route>
          <Route path="/benefit">
          <BenefitShop/>
          </Route>       
          <Route path="/">
          <HomePage/>
    
          </Route>
          
          

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
