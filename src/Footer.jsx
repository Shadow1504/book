import React from 'react'
import './Footer.css';
import { Link, Outlet } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
        <div className="col1">
            <h3>Useful links</h3>
            <Link to ='/'>Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Categories">Categories</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Cart">Your Basket  <BsFillBasketFill/></Link>
        </div>
        <div className="col2">
            <h3>Newsletter</h3>
            <form action="">
                <input type="text" placeholder='Your Email ID' />
                <button type="submit">Subscribe now</button>
            </form>
        </div>
        <div className="col3">
            <h3>Contact</h3>
            <p> Marzhan 77 Buckower Ring <br />Contact: +91098955xyz</p>
        </div>
        <Outlet></Outlet>
    </div>
  )
}
export default Footer