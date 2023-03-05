import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div>
        <div className='box'>
      <div className="box-content">
        <div className="address">
            <span>
                Location:
             Marzhan 77 Buckower Ring
            </span>
            <br />
            <span>Contact: +91098955xyz</span>
        </div>
        <div className="news-box">
            <span className='Sub-heading'>Subscribe to our Newsletter</span>
            <input type="text" placeholder="Name" name="name" required/>
            <input type="text" placeholder="Email address" name="mail" required/>
        <label>
            <input type="checkbox" checked="checked" name="subscribe"/> Daily Newsletter
        </label>
        <div class="news-box">
            <input type="submit" value="Subscribe"/>
        </div>
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

export default Contact