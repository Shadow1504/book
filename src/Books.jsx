import React from 'react'
import card from './Card.js';
import './Books.css';
import { Link } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Books({cart, setCart}) 
{
  const {product}=card;
  function add(points)
  {
    if(cart.indexOf(points)!==-1){
      return;
    }
    setCart([...cart,points])
    console.log(cart);
  }
  return ( 
    <div>
      <h2 className='add'>Add to cart:{cart.length}</h2>
      <div className='container'>
      {
        product.map((point)=>
        <div className="flex" >
          <div className='card'>
            <img src={point.img}></img>
            <h3>{point.name}</h3>
            <h4>€{point.price}</h4>
            <button className='btn' onClick={()=>add(point)}>Add to cart</button> 
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
);
}
export default Books