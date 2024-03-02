import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
function CartItems() {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartItem'>
        <div className='cartitem-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p> 
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e,i)=>{
         if(cartItems[e.id]>0)
         {
            return <div key={i}>
            <div className='cartitems-format cartitem-format-main'>
                <img src={e.image} className='carticon-product-icon' alt='' />
                <p> {e.name}</p>
                <p>${e.new_price} </p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>$ {e.new_price*cartItems[e.id]}</p>
                <img className="cartitems-remove-icon" src={remove_icon}onClick={()=>{removeFromCart(e.id)}} alt=""/>
            </div>
            <hr/>
            </div>
         }
         return null;
        })}
        <div className='cartitems-down'>
          <div className='cartitems-total'>
            <h1>cart Totals</h1>
            <div> 
              <div className='cartitems-total-item'>
               <p>Subtotal</p>
               <p>${getTotalCartAmount()}</p>
               </div>
               <hr/>
               <div className='cartitems-total-item'>
                <p>Shiping fee</p>
                <p>free</p>
               </div>
               <hr/>
               <div className='cartitems-total-item'>
                <h3> Total</h3>
                <h3>$ {getTotalCartAmount()}</h3>
               </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
              <p>If you have a promo code, Enter it here</p>
              <div className='cartitems-promobox'>
                <input type='text' placeholder='promo code'/>
                <button>Submit</button>
             
            </div>
          </div>
        </div>
        </div>
  )
}

export default CartItems