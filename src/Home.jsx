import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { FaTags } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 
function Home() {        
  return (
    <div>
        <div className="banner">
        <div className="banner-content">
            <h2>Year end sale, Limited collection bookstore...</h2>
            <h1>Get 70% Off for all genre books! </h1>
            <p>Donec sodales sagittis magna. SedMaecenas nec odio et ante tincidunt tempus. <br></br>vitae sapien ut libero venenatis faucibus. Nullam quis ante.</p>
            <button>Shop Now</button>
        </div>
        </div>
        
        <div className="tokens">
          <div className="token-content">
            <div className="icon"><FaRegPaperPlane /></div>
            <div className="text">
              <h3>Free shipping</h3>
              <h4>Order Over €100</h4>
            </div>
          </div>
          <div className="token-content">
            <div className="icon"><AiOutlineLock/></div>
            <div className="text">
              <h3>Secure payment</h3>
              <h4>100% secure</h4>
            </div>
          </div>
          <div className="token-content">
            <div className="icon"><FaTags/></div>
            <div className="text">
              <h3>Best price</h3>
              <h4>Guaranteed price</h4>
            </div>
          </div>
          <div className="token-content">
            <div className="icon"><BsArrowClockwise/></div>
            <div className="text">
              <h3>Free returns</h3>
              <h4>within 30 days return</h4>
            </div>
          </div>
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

export default Home