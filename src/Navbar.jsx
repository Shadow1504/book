import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsFillBasketFill } from "react-icons/bs";

function Navbar() {
  return (
    <div>
    <div className='header'>
        <div className="logo">
            <h1>BOOK <span>ATTIC</span></h1>
        </div>
        <div className="search_bar">
            <input type="search" id="search_bar" placeholder='Search' />
        </div>
    </div>
    
    <div className="navbar">
        <div className="nav_links">
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Books">Books</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Cart">Your Basket  <BsFillBasketFill/></Link></li>
            </ul>
        </div>
    </div>
    <Outlet></Outlet>
    </div>
  )
}
export default Navbar