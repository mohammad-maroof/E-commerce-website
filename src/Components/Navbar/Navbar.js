import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
  const[menu, Setmenu]= useState("shop");
  const {getTotalCartItem}=useContext(ShopContext)
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
        </div>
        <ul className='nav_menu'>
          <li onClick={()=>{Setmenu("Shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
          <li onClick={()=>{Setmenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{Setmenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{Setmenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-loing-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/Cart'><img src={cart_icon} alt=""/></Link>
           <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>

     
      </div>
  )
}

export default Navbar