import React from 'react'
import './About.css';
import { BsDropletFill } from "react-icons/bs";
import {BsSliders } from "react-icons/bs";
import { IoIosMan } from "react-icons/io";
import { BsFillBasketFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <div className="about-section">
            <h1>Our vision!</h1>
            <p> A well-set paragraph of text is not supposed to wow the reader;observation for which the paragraph is a vehicle. <br></br>In fact, the perfect paragraph is unassuming to the point of near invisibility. <br></br>That is not to say that the appearance of your text should have no appeal at all. On the contrary: well-balanced, <br></br>comfortably read typography is a thing of beauty; it’s just not the arresting sort of beauty that might distract you from reading.</p>
        </div>
        <div className="about-content">
            <div className="box1">
                <div className="pic"><img src={require("./write.jpg")} alt="" /></div>
                <div className='text'>
                    <p className='icon'><BsDropletFill /></p>
                    <h1>Give life to reading</h1>
                    <p>Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Diam maecenas ultricies mi eget.</p>
                    <p>Integer quis auctor elit sed vulputate mi sit amet mauris. Quam lacus suspendisse faucibus interdum posuere lorem. Nibh tellus molestie nunc non blandit massa enim nec dui. Suspendisse in est ante in nibh mauris.</p>
                </div>
            </div>
            <br />
            <div className="box1">
                <div className="pic"><img src={require("./type.jpg")} alt="" /></div>
                <div className='text'>
                    <p className='icon'><BsSliders/></p>
                    <h1>Seed of knowledge</h1>
                    <p>Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Diam maecenas ultricies mi eget.</p>
                    <p>Integer quis auctor elit sed vulputate mi sit amet mauris. Quam lacus suspendisse faucibus interdum posuere lorem. Nibh tellus molestie nunc non blandit massa enim nec dui. Suspendisse in est ante in nibh mauris.</p>
                </div>
            </div>
            <br />
            <div className="box1">
                <div className="pic"><img src={require("./girl_book.jpg")} alt="" /></div>
                <div className='text'>
                    <p className='icon'><IoIosMan /></p>
                    <h1>Best for bookworms</h1>
                    <p>Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Diam maecenas ultricies mi eget.</p>
                    <p>Integer quis auctor elit sed vulputate mi sit amet mauris. Quam lacus suspendisse faucibus interdum posuere lorem. Nibh tellus molestie nunc non blandit massa enim nec dui. Suspendisse in est ante in nibh mauris.</p>
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

export default About