import './Navbar.css';
import './Home.css';
import './About.css';
import './Contact.css';
import './Footer.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Books from './Books';
import Contact from './Contact';
import Footer from './Footer';
import {useState} from 'react';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const[cart,setCart]=useState([]);
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navbar cart={cart}></Navbar>}>
      <Route index element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Books' element={<Books cart={cart} setCart={setCart}></Books>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='Cart' element={<Cart cart={cart} setcart={setCart}></Cart>}></Route>
      <Route path='Footer' element={<Footer/>}></Route>
     </Route>
    </Routes>
    </BrowserRouter>
    {/* <Cart cart={cart} setcart={setCart}></Cart> */}
    </div>
  );
}

export default App;
