import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Cart.css';
import { BsFillBasketFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'         

function Cart({cart,setcart}) {
    function del(rem)
    {
     let remove=cart.filter((product)=>product.id!==rem)
     setcart(remove);
    }
        const[price,setPrice]=useState(0);
        useEffect(()=>{
        let total=0;
        cart.map((val)=>(total+=val.quantity*val.price));
        setPrice(total)
    }) 
    function inc(val,b){
      const abc = cart.indexOf(val);
      const update=cart;
      update[abc].quantity += b;
      console.log(abc);
      console.log(update);
      if(update[abc].quantity==0){
        update[abc].quantity=1;
      }
      setcart([...cart]);
    }
    
  return (
    <div>
    <div className='card-content1'>
      <h2 className='title'>Your Basket</h2>
      <h2 className='title'>Total Cart Amount: €{price}</h2>
      {
        cart.map((val)=>
          <div className="card-flex1">
            <div className='c2'>
              <img src={val.img} width="200px"></img>
              <div className="description">
              <h2>{val.name}</h2>
              <h4>€{val.price}</h4>
              <div className="quan" >
                  <button onClick={()=>inc(val,1)}>+</button>
                  <button>{val.quantity}</button>
                  <button onClick={()=>inc(val,-1)}>-</button>
              </div>
              <br />
              <button onClick={()=>del(val.id)}>Delete</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
    <div className='footer'>
        <div className="col1">
            <h3>Useful links</h3>
            <Link to ='/'>Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Books">Books</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Cart">Your Basket  <BsFillBasketFill/></Link>
        </div>
        <div className="col2">
            <h3>Newsletter</h3>
            <form action="">
                <input type="email" placeholder='Your Email ID' required/>
                <button type="submit">Subscribe now</button>
            </form>
        </div>
        <div className="col3">
            <h3>Contact</h3>
            <p> Marzhan 77 Buckower Ring <br />Contact: +91098955xyz</p>
            <div className="social-icons">
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Cart